function processFiles(
  conn,
  target,
  action,
  beanType,
  data,
  req,
  res,
  callback,
  p,
  user
) {
  console.log('processFiles');
  if (req.files && req.files.length > 0 && p.success) {
    var index = -1;
    var bean = p.result;
    var fn = function() {
      index++;
      if (index >= req.files.length) {
        conn.update(beanType, bean.id, conn.getBean(beanType, bean), p => {
          callback(p);
        });
        return;
      }
      var file = req.files[index];
      var field = file.fieldname.split('_file')[0];

      var fileType = require('file-type');
      var ext = fileType(file.buffer).ext;
      console.log('detected file:', file, field, bean[field], p, ext);
      if ('jpg,jpeg,png'.indexOf(ext) != -1) {
        if (bean[field] != undefined) {
          var gm = require('gm');

          gm(file.buffer)
            .resize(100, 100)
            .autoOrient()
            .toBuffer(function(err, buffer) {
              var previewStr = buffer.toString('base64');
              conn.create(
                'media',
                conn.getBean('media', {
                  targetDoc: bean.id,
                  beanType: beanType,
                  fieldName: field,
                  mimeType: file.mimetype,
                  size: previewStr.length,
                  resolution: 'thumbnail',
                  data: previewStr
                }),
                m => {
                  if (m.success == false) {
                    console.log('error while processing resize preview', m);
                  } else {
                    if (bean['thumbnail'] != undefined)
                      bean['thumbnail'] = m.result.id;
                  }
                  gm(file.buffer)
                    .resize(400, 225)
                    .autoOrient()
                    .toBuffer(function(err, buffer) {
                      var previewStr = buffer.toString('base64');
                      conn.create(
                        'media',
                        conn.getBean('media', {
                          targetDoc: bean.id,
                          beanType: beanType,
                          fieldName: field,
                          mimeType: file.mimetype,
                          size: previewStr.length,
                          resolution: 'preview',
                          data: previewStr
                        }),
                        m => {
                          if (m.success == false) {
                            console.log(
                              'error while processing resize preview',
                              m
                            );
                          } else {
                            if (bean['preview'] != undefined)
                              bean['preview'] = m.result.id;
                          }
                          var originalStr = file.buffer.toString('base64');
                          conn.create(
                            'media',
                            conn.getBean('media', {
                              targetDoc: bean.id,
                              beanType: beanType,
                              fieldName: field,
                              mimeType: file.mimetype,
                              size: originalStr.length,
                              resolution: 'original',
                              data: originalStr
                            }),
                            m => {
                              if (m.success == false) {
                                console.log('error while processing upload', m);
                              } else {
                                bean[field] = m.result.id;
                              }
                              fn();
                            }
                          );
                        }
                      );
                    });
                }
              );
            });
        } else {
          fn();
        }
      } else if ('mp4,mov,3gp,avi,mpeg,mpg'.indexOf(ext) != -1) {
        //   var generatePreview = require('ffmpeg-generate-video-preview');

        //   var fs = require('fs');
        //   var uuidv4 = require('uuid/v4');

        //   var fileuuid = uuidv4();

        //   fs.writeFileSync('./uploads/'+fileuuid+'.'+ext, file.buffer);

        //   async var start = function() {
        //     await generatePreview({
        //       input: './uploads/'+fileuuid+'.'+ext,
        //       output: './uploads/'+fileuuid+'-128.gif',
        //       width: 128
        //     });
        //     await generatePreview({
        //       input: './uploads/'+fileuuid+'.'+ext,
        //       output: './uploads/'+fileuuid+'-640.gif',
        //       width: 640
        //     });
        // }

        // start()

        //   var previewStr = fs.readFileSync('./uploads/'+fileuuid+'-128.gif').toString('base64');
        //   conn.create(
        //     'media',
        //     conn.getBean('media', {
        //       targetDoc: bean.id,
        //       beanType: beanType,
        //       fieldName: field,
        //       mimeType: 'image/gif',
        //       size: previewStr.length,
        //       resolution: 'thumbnail',
        //       data: previewStr
        //     }),
        //     m => {
        //       if (m.success == false) {
        //         console.log('error while processing resize preview', m);
        //       } else {
        //         if (bean['thumbnail'] != undefined)
        //           bean['thumbnail'] = m.result.id;
        //       }

        //       previewStr = fs.readFileSync('./uploads/'+fileuuid+'-640.gif').toString('base64');
        //       conn.create(
        //         'media',
        //         conn.getBean('media', {
        //           targetDoc: bean.id,
        //           beanType: beanType,
        //           fieldName: field,
        //           mimeType: file.mimetype,
        //           size: previewStr.length,
        //           resolution: 'preview',
        //           data: previewStr
        //         }),
        //         m => {
        //           if (m.success == false) {
        //             console.log(
        //               'error while processing resize preview',
        //               m
        //             );
        //           } else {
        //             if (bean['preview'] != undefined)
        //               bean['preview'] = m.result.id;
        //           }
        //           var originalStr = file.buffer.toString('base64');
        //           conn.create(
        //             'media',
        //             conn.getBean('media', {
        //               targetDoc: bean.id,
        //               beanType: beanType,
        //               fieldName: field,
        //               mimeType: file.mimetype,
        //               size: originalStr.length,
        //               resolution: 'original',
        //               data: originalStr
        //             }),
        //             m => {
        //               if (m.success == false) {
        //                 console.log('error while processing upload', m);
        //               } else {
        //                 bean[field] = m.result.id;
        //               }
        //               fn();
        //             }
        //           );
        //         }
        //       );
        //   });
        var originalStr = file.buffer.toString('base64');
        conn.create(
          'media',
          conn.getBean('media', {
            targetDoc: bean.id,
            beanType: beanType,
            fieldName: field,
            mimeType: file.mimetype,
            size: originalStr.length,
            resolution: 'original',
            data: originalStr
          }),
          m => {
            if (m.success == false) {
              console.log('error while processing upload', m);
            } else {
              bean[field] = m.result.id;
            }
            fn();
          }
        );
      } else if ('mp3,wav,m4a') {
        var originalStr = file.buffer.toString('base64');
        conn.create(
          'media',
          conn.getBean('media', {
            targetDoc: bean.id,
            beanType: beanType,
            fieldName: field,
            mimeType: file.mimetype,
            size: originalStr.length,
            resolution: 'original',
            data: originalStr
          }),
          m => {
            if (m.success == false) {
              console.log('error while processing upload', m);
            } else {
              bean[field] = m.result.id;
            }
            fn();
          }
        );
      }
    };
    fn();
  } else {
    callback(p);
  }
}

function doProcess(
  conn,
  target,
  action,
  beanType,
  data,
  req,
  res,
  callback,
  user
) {
  console.log('doProcess', target, action, user);
  var output = conn.status(false, 'failed.request', []);

  if (action == 'query') {
    console.log('query', target);
    conn.query(beanType, data, p => {
      console.log('found', p);
      callback(p);
    });
  } else if (action == 'get') {
    console.log('get', target);
    conn.get(beanType, target, p => {
      console.log('found', p);
      callback(p);
    });
  } else if (action == 'find') {
    console.log('find', target);
    conn.find(beanType, target, p => {
      console.log('found', p);
      callback(p);
    });
  } else if (action == 'create') {
    console.log('create', data);
    if (beanType == 'post') {
      data.owner = user.id;
      data.author = user.firstName;
    }
    conn.create(beanType, conn.getBean(beanType, data), p => {
      processFiles(conn, target, action, beanType, data, req, res, callback, p);
    });
  } else if (action == 'update') {
    console.log('update', data);
    conn.get(beanType, data.id, d => {
      if (d.success) {
        var bean = d.result;
        for (var i in data) {
          bean[i] = data[i];
        }
        conn.update(beanType, data.id, conn.getBean(beanType, bean), p => {
          processFiles(
            conn,
            target,
            action,
            beanType,
            data,
            req,
            res,
            callback,
            p,
            user
          );
        });
      } else {
        callback(d);
      }
    });
  } else if (action == 'remove') {
    console.log('remove', target);
    conn.remove(beanType, target, p => {
      callback(p);
    });
  } else if (action == 'media') {
    console.log('media', beanType);
    conn.get('media', beanType, p => {
      if (p.success) {
        var img = Buffer.from(p.result.data, 'base64');

        res.writeHead(200, {
          'Content-Type': p.result.mimeType,
          'Content-Length': img.length
        });
        res.end(img);
      } else {
        callback(p);
      }
    });
  } else if (action == 'token') {
    console.log('token');
    conn.query('getAccount', data, p => {
      if (p.success && p.result.length > 0) {
        var user = p.result[0];
        var jwt = require('jsonwebtoken');
        var token = jwt.sign(user, 'pulseplay');
        callback(conn.status(true, 'token.success', { token: token }));
      } else {
        console.log('found', p);
        callback(p);
      }
    });
  } else if (action == 'meta') {
    console.log('meta');
    callback(conn.status(true, 'meta.success', conn.getMeta()));
  } else {
    callback(output);
  }
}

module.exports.process = function(conn, target, req, res, callback) {
  var { action, beanType, target } = req.params;
  console.log(action, beanType);

  var data = undefined;
  try {
    if (req.query.data) {
      data = JSON.parse(req.query.data);
    } else {
      data = JSON.parse(req.body.data);
    }
  } catch (e) {}
  try {
    var jwt = require('jsonwebtoken');
    var user = { access: 'guest' };

    if (req.query.token) {
      user = jwt.verify(req.query.token, 'pulseplay');
    } else {
      user = jwt.verify(req.body.token, 'pulseplay');
    }
  } catch (e) {}

  console.log('processing:', target, action, beanType);
  doProcess(conn, target, action, beanType, data, req, res, callback, user);
};
