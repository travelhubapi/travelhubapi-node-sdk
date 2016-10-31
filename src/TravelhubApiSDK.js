import TravelhubApiSDKHotel from './TravelhubApiSDKHotel';
import TravelhubApiSDKOAuth from './TravelhubApiSDKOAuth';

export default class TravelhubApiSDK {

  constructor(settings) {
    this.oauth = new TravelhubApiSDKOAuth(settings);
    this.hotel = new TravelhubApiSDKHotel(settings, this.oauth);
  }

  request(method, uri, options = {}) {
    const opts = {
      uri,
      method,
    };
    Object.assign(opts, options);
    return this.oauth.request(opts);
  }

  get(uri, options) {
    return this.request('GET', uri, options);
  }

  post(uri, options) {
    return this.request('POST', uri, options);
  }

  del(uri, options) {
    return this.request('DELETE', uri, options);
  }
}
