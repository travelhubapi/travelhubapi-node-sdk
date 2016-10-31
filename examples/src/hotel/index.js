const TravelhubApiSDK = require('../../../');
const util = require('../util');
const methods = require('./methods');

const settings = {
  clientId: process.env.TRAVELHUBAPI_CLIENT_ID,
  clientSecret: process.env.TRAVELHUBAPI_CLIENT_SECRET,
  enviroment: process.env.NODE_ENV === 'production' ? 'production' : 'staging',
};

const now = new Date();
const checkIn = util.formatDate(util.addDays(now, 1));
const checkOut = util.formatDate(util.addDays(now, 3));
const locationDescription = 'sao paulo';

const thubSDK = new TravelhubApiSDK(settings);
const hotelSDK = thubSDK.hotel;

module.exports.run = function run() {
  return methods.getLocationId(hotelSDK, locationDescription)
    .then(locationId => methods.getHotelAvailable(hotelSDK, locationId, checkIn, checkOut))
    .then(hotel => methods.book(hotelSDK, hotel, checkIn, checkOut))
    .then(booking => methods.getBooking(hotelSDK, booking.code))
    .then(booking => methods.cancelBooking(hotelSDK, booking.code));
};
