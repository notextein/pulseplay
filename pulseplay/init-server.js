var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var DB = require('./src/persistence/DB');
var BeanService = require('./src/services/BeanService');
var IndexService = require('./src/services/IndexService');

var app = express();

function process(target, service, req, res) {
  var conn = DB.connect('http://127.0.0.1:8091', 'root', '123456', 'pulseplay');
  service.process(conn, target, req, res, p => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(p, null, 2));
  });
}

function route(target, service) {
  app.get(target, function(req, res) {
    process(target, service, req, res);
  });
  app.post(target, function(req, res) {
    process(target, service, req, res);
  });
}

function init() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  var storage = multer.memoryStorage();
  app.use(
    multer({ storage: storage, limits: { fileSize: 1000 * 1000 * 10 } }).any()
  );
  app.use(cookieParser());

  route('/', IndexService);
  route('/bean/:action', BeanService);
  route('/bean/:action/:beanType', BeanService);
  route('/bean/:action/:beanType/:target', BeanService);

  var server = app.listen(10001, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Blitz App listening at http://%s:%s', host, port);
  });
}
init();

//docker run -d -p 8091-8093:8091-8093 --net host --name couchbase couchbase
//sudo apt-get install -y graphicsmagick

// console.log('http://127.0.0.1:8091');
// var conn = DB.connect('http://127.0.0.1:8091', 'root', '123456', 'pulseplay');
// conn.create(
//   'content',
//   { title: 'My Title', description: 'My Description' },
//   p => {
//     console.log('create', p);
//     conn.find('content', '', p => {
//       conn.find('content', '', p => {
//         console.log('find', p);
//         if (p.success && p.result.length > 0) {
//           var doc = p.result[0];
//           doc.title = 'Updated Title';
//           conn.update('content', doc.id, doc, p => {
//             console.log(p);
//             if (p.success) {
//               conn.query(
//                 'SELECT id, title FROM `pulseplay` WHERE _type=$_type',
//                 { _type: 'content' },
//                 p => {
//                   console.log(p);
//                 }
//               );
//             } else {
//               console.log(p.result);
//             }
//           });
//         } else {
//           console.log(p.result);
//         }
//       });
//     });
//   }
// );
