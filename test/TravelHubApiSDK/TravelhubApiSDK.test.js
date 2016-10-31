import expect from 'expect.js';
import TravelhubApiSDK from 'TravelhubApiSDK.js';
import TravelhubApiSDKOAuth from 'TravelhubApiSDKOAuth.js';
import TravelhubApiSDKHotel from 'TravelhubApiSDKHotel.js';
import travelhubApiHotelMockJSON from '../mock/json/travelhubapi-hotel.json.js';

describe('TravelHubApiSDK', function () {
  it('should be a class (function)', function () {
    expect(TravelhubApiSDK).to.be.a('function');
  });

  beforeEach(function () {
    const settings = {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      enviroment: 'staging',
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


  describe('functions', function () {
    describe('request', function () {
      it('should be a function', function () {
        expect(this.TravelhubApiSDK.request).to.be.a('function');
      });

      it('should make a request', function () {
        const url = 'http://hotel.stg.travelhubapi.com.br/v1/locations/description';
        return this.TravelhubApiSDK.request('GET', url)
          .then(function (locations) {
            expect(locations).to.be.an('object');
          });
      });
    });

    describe('get', function () {
      it('should be a function', function () {
        expect(this.TravelhubApiSDK.get).to.be.a('function');
      });

      it('should make a request', function () {
        const url = 'http://hotel.stg.travelhubapi.com.br/v1/locations/description';
        const options = {
          qs: {
            limit: 2,
          },
        };
        return this.TravelhubApiSDK.get(url, options)
          .then(function (locations) {
            expect(locations).to.be.an('object');
          });
      });
    });

    describe('post', function () {
      it('should be a function', function () {
        expect(this.TravelhubApiSDK.post).to.be.a('function');
      });

      it('should make a request', function () {
        const url = 'http://hotel.stg.travelhubapi.com.br/v1/bookings';
        const options = {
          body: travelhubApiHotelMockJSON.requestBooking,
        };
        return this.TravelhubApiSDK.post(url, options)
          .then(function (bookingResponse) {
            expect(bookingResponse).to.be.an('object');
          });
      });
    });

//    describe('del', function () {
//      it('should be a function', function () {
//        expect(this.TravelhubApiSDK.del).to.be.a('function');
//      });
//
//      it('should make a request', function () {
//        const url = 'http://hotel.stg.travelhubapi.com.br/v1/bookings/970HDuvnBWQ/1531361/1036685/yyfh4Thjd/cancel';
//        return this.TravelhubApiSDK.del(url)
//          .then(function (result) {
//            expect(result).to.be.an('object');
//          });
//      });
//    });
  });
});
