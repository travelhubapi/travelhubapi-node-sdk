import TravelhubSDK from 'TravelhubSDK.js';
import TravelhubSDKHotel from 'TravelhubSDKHotel.js';
import travelhubHotelMockJSON from './mock/json/travelhub-hotel.json.js';
import expect from 'expect.js';

describe('TravelHubSDKHotel', function() {

  it('should be a class (function)', function () {
    expect(TravelhubSDKHotel).to.be.a('function');
  });

  beforeEach(function () {
    this.travelhubSDK = new TravelhubSDK({
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      production: false,
      version: 'v1'
    });
  });

  describe('instance', function() {

    it('should be an instance of TravelHubSDKHotel', function () {
      expect(this.travelhubSDK.hotel).to.be.an(TravelhubSDKHotel);
    });
  });

  describe('functions', function() {

    describe('getLocations', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getLocations).to.be.a('function');
      });

      it('should get locations', function () {
        return this.travelhubSDK.hotel.getLocations({description:'sao'})
          .then(function (locations) {
            expect(locations).to.eql(travelhubHotelMockJSON.responseLocations);
          });
      });
    });

    describe('getAvailabilities', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getAvailabilities).to.be.a('function');
      });

      it('should get availabilities', function () {
        const params = {
          destination:'5nWeELp4VyI',
          checkIn: '2016-10-20',
          checkOut: '2016-10-30',
          rooms: [
            {
              adt: 1,
              chd: 2,
              bed: 'Double'
            }
          ]
        };

        return this.travelhubSDK.hotel.getAvailabilities(params)
          .then(function (availabilities) {
            expect(availabilities).to.eql(travelhubHotelMockJSON.responseAvailabilities);
          });
      });
    });

    describe('get', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.get).to.be.a('function');
      });

      it('should get hotel', function () {
        return this.travelhubSDK.hotel.get({hotelCode:'100013091', broker: 'kw4K9q3qF4M'})
          .then(function (hotel) {
            expect(hotel).to.eql(travelhubHotelMockJSON.responseHotel);
          });
      });
    });

    describe('getFacilities', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getFacilities).to.be.a('function');
      });

      it('should get facilities', function () {
        return this.travelhubSDK.hotel.getFacilities({hotelCode:'100013091', broker: 'kw4K9q3qF4M'})
          .then(function (facilities) {
            expect(facilities).to.eql(travelhubHotelMockJSON.responseFacilities);
          });
      });
    });

    describe('getImages', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getImages).to.be.a('function');
      });

      it('should get facilities', function () {
        return this.travelhubSDK.hotel.getImages({hotelCode:'100013091', broker: 'kw4K9q3qF4M'})
          .then(function (images) {
            expect(images).to.eql(travelhubHotelMockJSON.responseImages);
          });
      });
    });

    describe('getCancellationPolicies', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getCancellationPolicies).to.be.a('function');
      });

      it('should get cancellation policies', function () {
        const params = {
          checkIn: '2016-10-20',
          checkOut: '2016-10-30',
          track: '2000335867',
          code: '2000335867',
          name: 'Alpha Praia Hotel',
          broker: '3xfjEXjwtRNEqUosESTsTA',
          accommodations:{
            items:[
              {
                code: '0',
                name: 'standard',
                guests: {
                  items: [
                    {
                      guestType: 'Adt'
                    },
                    {
                      guestType: 'Chd',
                      age: 11
                    }
                  ]
                },
                fares: {
                  items: [
                    {
                      rateCode: '13415265',
                      agreement: 'AGT',
                      mealPlan: {
                        code: '3449',
                        name: 'Café da Manhã'
                      }
                    }
                  ]
                }
              }
            ]
          }
        };

        return this.travelhubSDK.hotel.getCancellationPolicies(params)
          .then(function (cancellationPolicies) {
            expect(cancellationPolicies).to.eql(travelhubHotelMockJSON.responseCancellationPolicies);
          });
      });
    });

    describe('book', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.book).to.be.a('function');
      });

      it('should do booking', function () {
        return this.travelhubSDK.hotel.book(travelhubHotelMockJSON.requestBooking)
          .then(function (result) {
            expect(result).to.eql(travelhubHotelMockJSON.responseBooking);
          });
      });
    });

    describe('getHighlights', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getHighlights).to.be.a('function');
      });

      it('should get hotel highlights', function () {
        return this.travelhubSDK.hotel.getHighlights()
          .then(function (hotels) {
            expect(hotels).to.eql(travelhubHotelMockJSON.responseHighlights);
          });
      });
    });

    describe('getNationalHighlights', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getNationalHighlights).to.be.a('function');
      });

      it('should get national hotel highlights', function () {
        return this.travelhubSDK.hotel.getNationalHighlights()
          .then(function (hotels) {
            expect(hotels).to.eql(travelhubHotelMockJSON.responseNationalHighlights);
          });
      });
    });

    describe('getInternationalHighlights', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.hotel.getInternationalHighlights).to.be.a('function');
      });

      it('should get international hotel highlights', function () {
        return this.travelhubSDK.hotel.getInternationalHighlights()
          .then(function (hotels) {
            expect(hotels).to.eql(travelhubHotelMockJSON.responseInternationalHighlights);
          });
      });
    });
  });
});

