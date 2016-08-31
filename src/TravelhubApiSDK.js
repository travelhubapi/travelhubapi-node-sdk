import TravelhubApiSDKHotel from './TravelhubApiSDKHotel';
import TravelhubApiSDKOAuth from './TravelhubApiSDKOAuth';

export default class TravelhubApiSDK {

  constructor(settings) {
    settings.version = settings.version || 'v1';
    this.oauth = new TravelhubApiSDKOAuth(settings);
    this.hotel = new TravelhubApiSDKHotel(settings, this.oauth);
  }
}
