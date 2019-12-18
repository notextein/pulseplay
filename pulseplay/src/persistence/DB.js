module.exports.connect = function(url, username, password, bucketname) {
  var couchbase = require('couchbase');
  var uuidv4 = require('uuid/v4');
  var cluster = new couchbase.Cluster(url);
  cluster.authenticate(username, password);
  var N1qlQuery = couchbase.N1qlQuery;
  var bucket = cluster.openBucket(bucketname);
  var models = require('./models');

  var storedModels = {};
  var storedQueries = {};

  var db = {
    getMeta: function() {
      return {
        models: storedModels,
        queries: storedQueries
      };
    },
    storeQuery: function(name, query) {
      storedQueries[name] = query;
    },
    storeModel: function(name, model) {
      storedModels[name] = model;
    },
    getBean: function(name, data) {
      var bean = {};
      bean._type = name;
      for (var i in storedModels[name]) {
        if (data[i] != undefined) {
          bean[i] = data[i];
        } else {
          bean[i] = storedModels[name][i];
        }
      }
      return bean;
    },
    getQuery: function(name) {
      return storedQueries[name];
    },
    getQueries: function() {
      return storedQueries;
    },
    getModel: function(name) {
      return storedModels[name];
    },
    getBucket: function() {
      return bucket;
    },
    getCluster: function() {
      return cluster;
    },
    status: function(flag, message, result) {
      return {
        success: flag,
        message: message,
        result: result
      };
    },
    get: function(type, id, cb) {
      bucket.get(id, function(error, result) {
        if (error) {
          cb(db.status(false, 'get.failed', error));
        } else {
          cb(db.status(true, 'get.success', result.value));
        }
      });
    },
    find: function(type, id, cb) {
      if (id == undefined || id == '') {
        id = '%';
      }
      var q = N1qlQuery.fromString(
        'SELECT * FROM `' + bucketname + '` WHERE _type=$_type AND id LIKE $id'
      );
      var params = { _type: type, id: id };
      console.log(type, id, q, params);
      bucket.query(q, params, (error, rows) => {
        if (error) {
          cb(db.status(false, 'find.failed', error));
        } else {
          var records = [];
          for (var i = 0; i < rows.length; i++) {
            records.push(rows[i][bucket.name]);
          }
          cb(db.status(true, 'find.success', records));
        }
      });
    },
    query: function(name, params, cb) {
      var q = N1qlQuery.fromString(db.getQuery(name));
      console.log(name, q, params);
      bucket.query(q, params, (error, rows) => {
        if (error) {
          cb(db.status(false, 'query.failed', error));
        } else {
          var records = [];
          for (var i = 0; i < rows.length; i++) {
            if (rows[i][bucket.name]) {
              records.push(rows[i][bucket.name]);
            } else {
              records.push(rows[i]);
            }
          }
          cb(db.status(true, 'query.success', records));
        }
      });
    },
    create: function(type, doc, cb) {
      var id = uuidv4();
      doc._type = type;
      doc.id = id;
      bucket.insert(id, doc, function(error, result) {
        if (error) {
          cb(db.status(false, 'create.failed', error));
        } else {
          db.get(type, id, function(p) {
            if (p.success) {
              cb(db.status(true, 'create.success', p.result));
            } else {
              cb(db.status(false, 'create.failed', p.result));
            }
          });
        }
      });
    },
    update: function(type, id, doc, cb) {
      if (id == undefined || id == '') {
        id = doc.id;
      }
      doc._type = type;
      doc.id = id;
      bucket.replace(id, doc, function(error, result) {
        if (error) {
          cb(db.status(false, 'update.failed', error));
        } else {
          db.get(type, id, function(p) {
            if (p.success) {
              cb(db.status(true, 'update.success', p.result));
            } else {
              cb(db.status(false, 'update.failed', p.result));
            }
          });
        }
      });
    },
    remove: function(type, id, cb) {
      bucket.remove(id, function(error, result) {
        if (error) {
          cb(db.status(false, 'remove.failed', error));
        } else {
          cb(db.status(true, 'remove.success', error));
        }
      });
    }
  };
  models.init(db);
  return db;
};
