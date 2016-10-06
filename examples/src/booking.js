'use strict';

var thubSDK = require('./sdk-factory')();

function booking(hotel, checkIn, checkOut, guests) {
  var accommodation = hotel.accommodations.items[0];

  accommodation.guests = guests;
  hotel.accommodations.items = [
    accommodation,
  ];

  var bookingModel = {
    checkIn: checkIn,
    checkOut: checkOut,
    hotel: hotel,
    vendor: {
      id: 'marcos.rava@flytour.com.br',
    },
  };
  return thubSDK.hotel.book(bookingModel);
}

module.exports = booking;
