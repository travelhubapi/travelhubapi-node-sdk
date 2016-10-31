const BLOCK = `\n${new Array(70).join('=')}\n`;
const vendorId = 'vendor@id';

module.exports.getLocationId = function getLocationId(hotelSDK, description) {
  console.log(`${BLOCK}.getLocations\n`);
  console.log(`Getting locations with description = '${description}'...`);

  return hotelSDK.getLocations({ description })
    .then((locationResult) => {
      const locations = locationResult.content;

      console.log('Getting first location...');

      return locations.items[0].id;
    });
};

module.exports.getHotelAvailable = function getHotelAvailable(
  hotelSDK,
  locationId,
  checkIn,
  checkOut) {
  const roomParameters = [
    {
      adt: 1,
      chd: 1,
      bed: 'Double',
      chdAges: [3],
    },
  ];

  console.log(`${BLOCK}.getAvailabilities\n`);

  return hotelSDK.getAvailabilities({ locationId, checkIn, checkOut, rooms: roomParameters })
    .then((availabilitiesResult) => {
      const availabilities = availabilitiesResult.content;

      console.log(`${availabilities.items.length} hotels available returned`);

      const availability = availabilities.items[0];
      const hotel = availability.hotels.items[0];

      console.log(`Getting first hotel code ${hotel.code} and name ${hotel.name} to be used`);

      return hotel;
    });
};

module.exports.book = function book(hotelSDK, hotel, checkIn, checkOut) {
  const guests = {
    items: [
      {
        firstName: 'Fulano',
        lastName: 'de Tal',
        document: {
          type: 'IndividualRegistrationCode',
          number: '12345678910',
        },
        gender: 'Male',
        guestType: 'Adt',
        birthDate: '1988-07-27',
      },
      {
        firstName: 'Siclana',
        lastName: 'de Tal',
        gender: 'Female',
        guestType: 'Chd',
        birthDate: '2013-11-20',
      },
    ],
  };

  const accommodation = {
    guests,
  };

  Object.assign(accommodation, hotel.accommodations.items[0]);

  const hotelRequest = {};

  Object.assign(hotelRequest, hotel);

  hotelRequest.accommodations = {
    items: [
      accommodation,
    ],
  };

  const vendor = {
    id: vendorId,
  };

  const bookRequest = {
    checkIn,
    checkOut,
    hotel: hotelRequest,
    vendor,
  };

  console.log(`${BLOCK}.book\n`);

  return hotelSDK.book(bookRequest)
    .then((bookingResponse) => {
      const booking = bookingResponse.content;
      console.log(`${booking.code} booking code returned`);
      return booking;
    });
};

module.exports.getBooking = function getBooking(hotelSDK, bookingCode) {
  console.log(`${BLOCK}.getBooking\n`);
  console.log(`Getting booking with code = '${bookingCode}'...`);
  return hotelSDK.getBooking({ bookingCode })
    .then((bookingResponse) => {
      const booking = bookingResponse.content;
      console.log('Booking got.');
      return booking;
    });
};
module.exports.cancelBooking = function getBooking(hotelSDK, bookingCode) {
  console.log(`${BLOCK}.cancelBooking\n`);
  console.log(`Canceling booking with code = '${bookingCode}'...`);
  return hotelSDK.getBooking({ bookingCode, vendorId })
    .then((cancelResponse) => {
      console.log('Booking canceled.');
      return cancelResponse.statusCode;
    });
};
