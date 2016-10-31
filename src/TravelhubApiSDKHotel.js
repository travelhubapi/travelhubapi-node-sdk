import Common from './TravelhubApiSDKCommon';

export default class TravelhubApiHotel {

  static get HOMOLOG_HOST() {
    return 'http://hotel.stg.travelhubapi.com.br';
  }

  static get PRODUCTION_HOST() {
    return 'http://hotel.travelhubapi.com.br';
  }

  constructor(settings, oAuth) {
    this.oauth = oAuth;
    this.version = 'v1';
    this.host = settings.enviroment === 'production' ?
      TravelhubApiHotel.PRODUCTION_HOST : TravelhubApiHotel.HOMOLOG_HOST;
  }

  getLocations(parameters) {
    const params = {};

    Object.assign(params, parameters);
    const description = params.description;
    delete params.description;
    const requestOptions = {
      uri: `${this.host}/${this.version}/locations/${description}`,
      method: 'GET',
      qs: params,
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  getAvailabilities(parameters = {}) {
    const params = {};

    Object.assign(params, parameters);

    const locationId = params.locationId;
    const checkIn = params.checkIn;
    const checkOut = params.checkOut;
    delete params.locationId;
    delete params.checkIn;
    delete params.checkOut;
    const requestOptions = {
      uri: `${this.host}/${this.version}/availabilities/${locationId}/${checkIn}/${checkOut}`,
      method: 'GET',
      qs: params,
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  getHotel(parameters = {}) {
    const params = {};

    Object.assign(params, parameters);
    const track = params.track;
    const requestOptions = {
      uri: `${this.host}/${this.version}/hotels/${track}`,
      method: 'GET',
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  getFacilities(parameters = {}) {
    const params = {};

    Object.assign(params, parameters);
    const track = params.track;
    const requestOptions = {
      uri: `${this.host}/${this.version}/hotels/${track}/facilities`,
      method: 'GET',
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  getImages(parameters = {}) {
    const params = {};

    Object.assign(params, parameters);
    const track = params.track;
    const requestOptions = {
      uri: `${this.host}/${this.version}/hotels/${track}/images`,
      method: 'GET',
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  getCancellationPolicies(parameters = {}) {
    const params = {};

    Object.assign(params, parameters);
    const checkIn = params.checkIn;
    const checkOut = params.checkOut;
    const fareType = params.fareType;
    delete params.checkIn;
    delete params.checkOut;
    delete params.fareType;
    const requestOptions = {
      uri: `${this.host}/${this.version}/bookings/${checkIn}/${checkOut}/cancellationPolicies`,
      method: 'POST',
      body: params,
      qs: fareType ? { fareType } : undefined,
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  book(booking) {
    const requestOptions = {
      uri: `${this.host}/${this.version}/bookings`,
      method: 'POST',
      body: booking,
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  getBooking(parameters = {}) {
    const params = {};

    Object.assign(params, parameters);
    const bookingCode = params.bookingCode;
    const requestOptions = {
      uri: `${this.host}/${this.version}/bookings/${bookingCode}`,
      method: 'GET',
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }

  cancelBooking(parameters = {}) {
    const params = {};

    Object.assign(params, parameters);
    const bookingCode = params.bookingCode;
    const vendorId = params.vendorId;
    const requestOptions = {
      uri: `${this.host}/${this.version}/bookings/${bookingCode}/${vendorId}`,
      method: 'DELETE',
    };

    return this.oauth.request(requestOptions).then(Common.parseResponse);
  }
}
