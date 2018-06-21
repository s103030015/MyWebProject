import axios from 'axios';
var passwordHash = require('password-hash');

import {encrypt} from '../utilities/encrypt.js';

// Develop server URL
//const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
const postBaseUrl = 'http://timecapsule.us-west-2.elasticbeanstalk.com/api';
//const postBaseUrl = 'http://timecapsule-16.us-west-2.elasticbeanstalk.com/api';


export function createUser(user_id, password, name) {
  let url = `${postBaseUrl}/login`;

  var hashedUserid = passwordHash.generate(user_id);
  var hashedPassword = passwordHash.generate(password);

  console.log(`Making POST request to: ${url} (login) (createUser)`);

  return axios.post(url, {user_id, password, name}).then(function(res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);
    return res.data;
  });
}

export function checkUserid(user_id) {
  let url = `${postBaseUrl}/login?user_id=${user_id}`;

  var hashedUserid = passwordHash.generate(user_id);

  console.log(`Making POST request to: ${url} (login) (checkUserid)`);

  return axios.post(url, {user_id}).then(function(res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);
    return res.data;
  });
}

export function checkName(name) {
  let url = `${postBaseUrl}/login?name=${name}`;

  console.log(`Making POST request to: ${url} (login) (checkName)`);

  return axios.post(url, {name}).then(function(res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);
    return res.data;
  });
}

export function login(user_id, password) {
  let url = `${postBaseUrl}/login?login=true`;

  var hashedUserid = passwordHash.generate(user_id);
  var hashedPassword = passwordHash.generate(password);

  console.log(`Making POST request to: ${url} (login) (login)`);

  return axios.post(url, {user_id, password}).then(function(res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);
    return res.data;
  });
}
