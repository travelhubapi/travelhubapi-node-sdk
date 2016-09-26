import cloneObj from './util/clone-object';

export default class TravelhubApiHotel {

  static get HOMOLOG_HOST() {
    return 'http://hotel.stg.travelhubapi.com.br';
  }

  static get PRODUCTION_HOST() {
    return 'http://hotel.travelhubapi.com.br';
  }

  constructor(settings, oAuth) {
    this.oauth = oAuth;
    this.version = settings.version;
    this.host = settings.enviroment === 'production' ?
      TravelhubApiHotel.PRODUCTION_HOST : TravelhubApiHotel.HOMOLOG_HOST;
  }

  getLocations(params) {
    params = cloneObj(params || {});
    const description = params.description;
    delete params.description;
    const requestOptions = {
      uri: `${this.host}/${this.version}/locations/${description}`,
      method: 'GET',
      qs: params,
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  getAvailabilities(params) {
    params = cloneObj(params || {});
    const destination = params.destination;
    const checkIn = params.checkIn;
    const checkOut = params.checkOut;
    delete params.destination;
    delete params.checkIn;
    delete params.checkOut;
    const requestOptions = {
      uri: `${this.host}/${this.version}/availabilities/${destination}/${checkIn}/${checkOut}`,
      method: 'GET',
      qs: params,
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  get(params) {
    params = cloneObj(params || {});
    const hotelCode = params.hotelCode;
    const broker = params.broker;
    const requestOptions = {
      uri: `${this.host}/${this.version}/hotel/${hotelCode}/${broker}`,
      method: 'GET',
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  getFacilities(params) {
    params = cloneObj(params || {});
    const hotelCode = params.hotelCode;
    const broker = params.broker;
    const requestOptions = {
      uri: `${this.host}/${this.version}/hotel/${hotelCode}/${broker}/facilities`,
      method: 'GET',
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  getImages(params) {
    params = cloneObj(params || {});
    const hotelCode = params.hotelCode;
    const broker = params.broker;
    const requestOptions = {
      uri: `${this.host}/${this.version}/hotel/${hotelCode}/${broker}/images`,
      method: 'GET',
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  getCancellationPolicies(params) {
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
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  book(booking) {
    const requestOptions = {
      uri: `${this.host}/${this.version}/bookings`,
      method: 'POST',
      body: booking,
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  getHighlights(params) {
    params = cloneObj(params || {});
    const highlightType = params.highlightType || 'all';
    delete params.highlightType;
    const requestOptions = {
      uri: `${this.host}/${this.version}/hotels/${highlightType}/highlights`,
      method: 'GET',
      qs: params,
      json: true,
    };

    return this.oauth.request(requestOptions);
  }

  getNationalHighlights(params) {
    params = cloneObj(params || {});
    params.highlightType = 'national';
    return this.getHighlights(params);
  }

  getInternationalHighlights(params) {
    params = cloneObj(params || {});
    params.highlightType = 'international';
    return this.getHighlights(params);
  }
}
