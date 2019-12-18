// // let fs = require('fs');
// let request = require('request');

import store from '../ducks/store';
const HOST = 'http://128.233.65.110:10001'; // live
// const HOST = 'http://64.225.6.174:10001'; // test

const api = {
  get: (bean, callback) => {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(HOST + bean, config)
      .then(response => response.json())
      .then(json => callback(json))
      .catch(err => {
        callback(err);
        console.log('get err!!!!!', err);
      });
  },
  post: (bean, data, callback) => {
    const formdata = new FormData();
    formdata.append('data', JSON.stringify(data));
    formdata.append('token', store.getState().auth.token);
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formdata
    };

    fetch(HOST + bean, config)
      .then(response => response.json())
      .then(json => callback(json))
      .catch(err => {
        callback(err);
        console.log('get err!!!!!', err);
      });
  },
  upload: (bean, data, fileSrc, callback) => {
    console.log('trying to upload');
    const formdata = new FormData();
    formdata.append('data', JSON.stringify(data));
    formdata.append('token', store.getState().auth.token);
    formdata.append('media_file', fileSrc);
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formdata
    };

    fetch(HOST + bean, config)
      .then(response => response.json())
      .then(json => callback(json))
      .catch(err => {
        callback(err);
        console.log('get err!!!!!', err);
      });
  }
};

export default api;
