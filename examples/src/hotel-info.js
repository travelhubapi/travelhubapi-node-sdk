'use strict';

var thubSDK = require('./sdk-factory')();

function hotelInfo(hotel) {
  return thubSDK.hotel.get({
    track: hotel.track,
    broker: hotel.broker,
  });
}

module.exports = hotelInfo;

