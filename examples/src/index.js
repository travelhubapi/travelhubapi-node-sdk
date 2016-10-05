var path = require('path');
var dotenv = require('dotenv');
var data = require('./data.json')

dotenv.config({path: path.resolve(__dirname, '../../.env')});

var TravelhubApiSDK = require('../../');

var thubSDK = new TravelhubApiSDK({
  clientId: process.env.TRAVELHUBAPI_CLIENT_ID,
  clientSecret: process.env.TRAVELHUBAPI_CLIENT_SECRET,
  enviroment: process.env.NODE_ENV === 'production' ? 'production' : 'staging', //default: will use staging urls
});

function booking(locationsDescription, checkIn, checkOut, guests, rooms) {
  return thubSDK.hotel.getLocations({description: locationsDescription, limit: 1})
    .then(function (locations) {
      var location = locations.items[0];
      var params = {
        destination: location.city.id,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        rooms: rooms
      };
      return thubSDK.hotel.getAvailabilities(params);
    })
  // #2 search availability of hotels as needs
    .then(function (availabilities) {
      var hotel = availabilities.items[0].hotels.items[0];
      var accommodation = hotel.accommodations.items[0];

      accommodation.guests = guests;
      hotel.accommodations.items = [accommodation];

      var booking = {
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        hotel: hotel,
        vendor: {
          id: "marcos.rava@flytour.com.br"
        },
      };
  // #3 send a booking request for the selected hotel
      return thubSDK.hotel.book(booking);
    })
    .then(function (result) {
      return result;
    })
    .catch(function (err) {
      console.error(err.statusCode);
      throw err;
    });
}

booking('sao paulo', data.checkIn, data.checkOut, data.guests, data.rooms)
  .then(function (result) {
    console.log(result);
  });
