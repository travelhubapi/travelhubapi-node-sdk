import TravelhubApiSDKHotel from './TravelhubApiSDKHotel';
import TravelhubApiSDKOAuth from './TravelhubApiSDKOAuth';

export default class TravelhubApiSDK {

  constructor(settings) {
    const config = {
      version: 'v1',
    };
    Object.assign(config, settings);
    this.oauth = new TravelhubApiSDKOAuth(settings);
    this.hotel = new TravelhubApiSDKHotel(settings, this.oauth);
  }
}
