import TravelhubSDKHotel from 'TravelhubSDKHotel.js';
import travelhubHotelMockJSON from './json/travelhub-hotel.json.js';
import qs from 'qs';

export default function load(nock) {
  nock(TravelhubSDKHotel.HOMOLOG_HOST, {
      reqheaders: {
        authorization: 'Bearer accessToken'
      }
    })
    .get('/v1/hotels/all/highlights')
    .query(true)
    .times(1)
    .reply(200, highlightsHandler)
    .get('/v1/hotels/national/highlights')
    .query(true)
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseNationalHighlights)
    .get('/v1/hotels/international/highlights')
    .query(true)
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseInternationalHighlights)
    .get('/v1/locations/sao')
    .query(true)
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseLocations)
    .get('/v1/availabilities/5nWeELp4VyI/2016-10-20/2016-10-30')
    .query(true)
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseAvailabilities)
    .get('/v1/hotel/100013091/kw4K9q3qF4M')
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseHotel)
    .get('/v1/hotel/100013091/kw4K9q3qF4M/facilities')
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseFacilities)
    .get('/v1/hotel/100013091/kw4K9q3qF4M/images')
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseImages)
    .post('/v1/bookings/2016-10-20/2016-10-30/cancellationPolicies', travelhubHotelMockJSON.requestCancellationPolicies)
    .query(true)
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseCancellationPolicies)
    .post('/v1/bookings', travelhubHotelMockJSON.requestBooking)
    .times(1)
    .reply(200, travelhubHotelMockJSON.responseBooking);

}

function highlightsHandler(uri) {
  let response = JSON.parse(JSON.stringify(travelhubHotelMockJSON.responseHighlights));
  let items = response.items;
  let query;
  [, query] = uri.split('?');

  if (query) {
    const params = qs.parse(query);
    if (params.checkIn) {
      items = items.filter(function(item) {
        return item.checkin.indexOf(params.checkIn) != -1;
      });
    }
    if (params.checkOut) {
      items = items.filter(function(item) {
        return item.checkout.indexOf(params.checkOut) != -1;
      });
    }
    if (params.destination) {
      items = items.filter(function(item) {
        return item.city.id === params.destination;
      });
    }
  }

  response.items = items;
  return response;
}
