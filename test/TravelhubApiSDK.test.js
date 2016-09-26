import expect from 'expect.js';
import TravelhubApiSDK from 'TravelhubApiSDK.js';
import TravelhubApiSDKOAuth from 'TravelhubApiSDKOAuth.js';
import TravelhubApiSDKHotel from 'TravelhubApiSDKHotel.js';

describe('TravelHubApiSDK', function () {
  it('should be a class (function)', function () {
    expect(TravelhubApiSDK).to.be.a('function');
  });

  beforeEach(function () {
    const settings = {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      enviroment: 'staging',
      version: 'v1',
    };

    this.TravelhubApiSDK = new TravelhubApiSDK(settings);
  });

  describe('instance', function () {
    it('should be an instance of TravelHubApiSDK', function () {
      expect(this.TravelhubApiSDK).to.be.an(TravelhubApiSDK);
    });

    it('should be an instance of TravelHubApiSDKOAuth', function () {
      expect(this.TravelhubApiSDK.oauth).to.be.an(TravelhubApiSDKOAuth);
    });

    it('should be an instance of TravelHubApiSDKHotel', function () {
      expect(this.TravelhubApiSDK.hotel).to.be.an(TravelhubApiSDKHotel);
    });
  });
});

