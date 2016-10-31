import TravelhubApiSDKHotel from 'TravelhubApiSDKHotel';
import travelhubApiHotelMockJSON from './json/travelhubapi-hotel.json';

export default function load(nock) {
  nock(TravelhubApiSDKHotel.HOMOLOG_HOST, {
    reqheaders: {
      authorization: 'Bearer accessToken',
    },
  })
  .defaultReplyHeaders({
    'X-Correlation-Id': 'X-Correlation-Id',
  })
  .get('/v1/locations/description')
  .query(true)
  .times(3)
  .reply(200, travelhubApiHotelMockJSON.responseLocations)
  .get('/v1/availabilities/locationId/2016-10-20/2016-10-30')
  .query({
    rooms: [
      {
        adt: 1,
        chd: 2,
        bed: 'Double',
      },
    ],
  })
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseAvailabilities)
  .get('/v1/hotels/track')
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseHotel)
  .get('/v1/hotels/track/facilities')
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseFacilities)
  .get('/v1/hotels/track/images')
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseImages)
  .post('/v1/bookings/2016-10-20/2016-10-30/cancellationPolicies',
          travelhubApiHotelMockJSON.requestCancellationPolicies)
  .query(true)
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseCancellationPolicies)
  .post('/v1/bookings', travelhubApiHotelMockJSON.requestBooking)
  .times(2)
  .reply(200, travelhubApiHotelMockJSON.responseBooking)
  .get('/v1/bookings/bookingCode')
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseBooking)
  .delete('/v1/bookings/bookingCode/vendorId')
  .times(2)
  .reply(204);
}
