'use strict';

var availabilites = require('./availabilities');
var booking = require('./booking');
var hotelInfo = require('./hotel-info');
var data = require('./data.json');

availabilites('sao paulo', data.checkIn, data.checkOut, data.rooms)
  .then(function (availabilities) {
    console.log(availabilities);
    var hotel = availabilities.items[0].hotels.items[0];
    return hotelInfo(hotel);
  })
  .then(function (hotel) {
    console.log(hotel);
    return booking(hotel, data.checkIn, data.checkOut, data.guests);
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.error(err.statusCode);
    throw err;
  });


