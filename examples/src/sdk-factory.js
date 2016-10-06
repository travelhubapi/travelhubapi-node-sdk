'use strict';

var TravelhubApiSDK = require('../../');

function factory() {
  var thubSDK = new TravelhubApiSDK({
    clientId: process.env.TRAVELHUBAPI_CLIENT_ID,
    clientSecret: process.env.TRAVELHUBAPI_CLIENT_SECRET,
    enviroment: process.env.NODE_ENV === 'production' ? 'production' : 'staging',
  });
  return thubSDK;
}

module.exports = factory;
