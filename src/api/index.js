// // let fs = require('fs');
// let request = require('request');

// const HOST = 'http://64.225.6.174:10001';

// const api = {
//   get: (bean, data) => {
//     const opts = {
//       method: 'GET',
//       redirect: 'follow'
//     };
//     let uri = bean;

//     if (data) {
//       uri += '/data=' + JSON.stringify(data);
//     }
//     fetch(HOST + uri, opts)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   },
//   post: (bean, data) => {
//     let options = {
//       method: 'POST',
//       url: Host + bean
//     };

//     // request(options, function(error, response, body) {
//     //   if (error) throw new Error(error);

//     //   console.log(body);
//     // });
//   },
//   upload: (bean, data, callback) => {
//     // hijack these for now
//     data.owner = 'Eira Borja';
//     data.postDate = '2019-12-16';

//     const formdata = new FormData();
//     formdata.append('data', JSON.stringify(data));
//     // media does not currently work
//     // data.append('media_file', {
//     //   uri: response.uri,
//     //   type: response.type,
//     //   name: response.fileName
//     // });
//     const config = {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data'
//       },
//       body: formdata
//     };

//     // fetch(HOST + bean, config)
//     //   .then(checkStatusAndGetJSONResponse => {
//     //     callback(checkStatusAndGetJSONResponse);
//     //     console.log(checkStatusAndGetJSONResponse);
//     //   })
//     //   .catch(err => {
//     //     console.log(err);
//     //     callback(err);
//     //   });
//   }
// };

// export default api;
