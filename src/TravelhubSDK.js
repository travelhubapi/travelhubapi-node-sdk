import TravelhubSDKHotel from './TravelhubSDKHotel';
import TravelhubSDKOAuth from './TravelhubSDKOAuth';

export default class TravelhubSDK {

  constructor(settings) {
    settings.version = settings.version || 'v1';
    this.oauth = new TravelhubSDKOAuth(settings);
    this.hotel = new TravelhubSDKHotel(settings, this.oauth);
  }
}
