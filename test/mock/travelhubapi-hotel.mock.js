import qs from 'qs';
import TravelhubApiSDKHotel from 'TravelhubApiSDKHotel';
import travelhubApiHotelMockJSON from './json/travelhubapi-hotel.json';

function highlightsHandler(uri) {
  const response = JSON.parse(JSON.stringify(travelhubApiHotelMockJSON.responseHighlights));
  let items = response.items;
  let query;
  [, query] = uri.split('?'); // eslint-disable-line prefer-const

  if (query) {
    const params = qs.parse(query);
    if (params.checkIn) {
      items = items.filter(function (item) {
        return item.checkin.indexOf(params.checkIn) !== -1;
      });
    }
    if (params.checkOut) {
      items = items.filter(function (item) {
        return item.checkout.indexOf(params.checkOut) !== -1;
      });
    }
    if (params.destination) {
      items = items.filter(function (item) {
        return item.city.id === params.destination;
      });
    }
  }

  response.items = items;
  return response;
}

export default function load(nock) {
  nock(TravelhubApiSDKHotel.HOMOLOG_HOST, {
    reqheaders: {
      authorization: 'Bearer accessToken',
    },
  })
  .get('/v1/hotels/all/highlights')
  .query(true)
  .times(1)
  .reply(200, highlightsHandler)
  .get('/v1/hotels/national/highlights')
  .query(true)
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseNationalHighlights)
  .get('/v1/hotels/international/highlights')
  .query(true)
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseInternationalHighlights)
  .get('/v1/locations/sao')
  .query(true)
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseLocations)
  .get('/v1/availabilities/5nWeELp4VyI/2016-10-20/2016-10-30')
  .query(true)
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseAvailabilities)
  .get('/v1/hotel/100013091/kw4K9q3qF4M')
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseHotel)
  .get('/v1/hotel/100013091/kw4K9q3qF4M/facilities')
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseFacilities)
  .get('/v1/hotel/100013091/kw4K9q3qF4M/images')
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseImages)
  .post('/v1/bookings/2016-10-20/2016-10-30/cancellationPolicies', travelhubApiHotelMockJSON.requestCancellationPolicies)
  .query(true)
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseCancellationPolicies)
  .post('/v1/bookings', travelhubApiHotelMockJSON.requestBooking)
  .times(1)
  .reply(200, travelhubApiHotelMockJSON.responseBooking);
}
