'use strict';

var thubSDK = require('./sdk-factory')();

function availabilities(locationsDescription, checkIn, checkOut, rooms) {
  return thubSDK.hotel.getLocations({
    description: locationsDescription,
    limit: 1,
  })
  .then(function (locations) {
    var location = locations.items[0];
    var params = {
      destination: location.city.id,
      checkIn: checkIn,
      checkOut: checkOut,
      rooms: rooms,
    };
    return thubSDK.hotel.getAvailabilities(params);
  });
}


module.exports = availabilities;
