import TravelhubApiSDKOAuth from 'TravelhubApiSDKOAuth.js';
import TravelhubApiSDKHotel from 'TravelhubApiSDKHotel.js';
import travelhubApiHotelMockJSON from './mock/json/travelhubapi-hotel.json.js';
import expect from 'expect.js';

describe('TravelHubApiSDKHotel', function() {

  it('should be a class (function)', function () {
    expect(TravelhubApiSDKHotel).to.be.a('function');
  });

  beforeEach(function () {
    const settings = {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      enviroment: 'staging',
      version: 'v1'
    };

    const oAuth = new TravelhubApiSDKOAuth(settings);
    this.hotel = new TravelhubApiSDKHotel(settings, oAuth);
  });

  describe('instance', function() {

    it('should be an instance of TravelHubApiSDKHotel', function () {
      expect(this.hotel).to.be.an(TravelhubApiSDKHotel);
    });
  });

  describe('functions', function() {

    describe('getLocations', function () {
      it('should be a function', function () {
        expect(this.hotel.getLocations).to.be.a('function');
      });

      it('should get locations', function () {
        return this.hotel.getLocations({description:'sao'})
          .then(function (locations) {
            expect(locations).to.eql(travelhubApiHotelMockJSON.responseLocations);
          });
      });
    });

    describe('getAvailabilities', function () {
      it('should be a function', function () {
        expect(this.hotel.getAvailabilities).to.be.a('function');
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

        return this.hotel.getAvailabilities(params)
          .then(function (availabilities) {
            expect(availabilities).to.eql(travelhubApiHotelMockJSON.responseAvailabilities);
          });
      });
    });

    describe('get', function () {
      it('should be a function', function () {
        expect(this.hotel.get).to.be.a('function');
      });

      it('should get hotel', function () {
        return this.hotel.get({hotelCode:'100013091', broker: 'kw4K9q3qF4M'})
          .then(function (hotel) {
            expect(hotel).to.eql(travelhubApiHotelMockJSON.responseHotel);
          });
      });
    });

    describe('getFacilities', function () {
      it('should be a function', function () {
        expect(this.hotel.getFacilities).to.be.a('function');
      });

      it('should get facilities', function () {
        return this.hotel.getFacilities({hotelCode:'100013091', broker: 'kw4K9q3qF4M'})
          .then(function (facilities) {
            expect(facilities).to.eql(travelhubApiHotelMockJSON.responseFacilities);
          });
      });
    });

    describe('getImages', function () {
      it('should be a function', function () {
        expect(this.hotel.getImages).to.be.a('function');
      });

      it('should get facilities', function () {
        return this.hotel.getImages({hotelCode:'100013091', broker: 'kw4K9q3qF4M'})
          .then(function (images) {
            expect(images).to.eql(travelhubApiHotelMockJSON.responseImages);
          });
      });
    });

    describe('getCancellationPolicies', function () {
      it('should be a function', function () {
        expect(this.hotel.getCancellationPolicies).to.be.a('function');
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

        return this.hotel.getCancellationPolicies(params)
          .then(function (cancellationPolicies) {
            expect(cancellationPolicies).to.eql(travelhubApiHotelMockJSON.responseCancellationPolicies);
          });
      });
    });

    describe('book', function () {
      it('should be a function', function () {
        expect(this.hotel.book).to.be.a('function');
      });

      it('should do booking', function () {
        return this.hotel.book(travelhubApiHotelMockJSON.requestBooking)
          .then(function (result) {
            expect(result).to.eql(travelhubApiHotelMockJSON.responseBooking);
          });
      });
    });

    describe('getHighlights', function () {
      it('should be a function', function () {
        expect(this.hotel.getHighlights).to.be.a('function');
      });

      it('should get hotel highlights', function () {
        return this.hotel.getHighlights()
          .then(function (hotels) {
            expect(hotels).to.eql(travelhubApiHotelMockJSON.responseHighlights);
          });
      });
    });

    describe('getNationalHighlights', function () {
      it('should be a function', function () {
        expect(this.hotel.getNationalHighlights).to.be.a('function');
      });

      it('should get national hotel highlights', function () {
        return this.hotel.getNationalHighlights()
          .then(function (hotels) {
            expect(hotels).to.eql(travelhubApiHotelMockJSON.responseNationalHighlights);
          });
      });
    });

    describe('getInternationalHighlights', function () {
      it('should be a function', function () {
        expect(this.hotel.getInternationalHighlights).to.be.a('function');
      });

      it('should get international hotel highlights', function () {
        return this.hotel.getInternationalHighlights()
          .then(function (hotels) {
            expect(hotels).to.eql(travelhubApiHotelMockJSON.responseInternationalHighlights);
          });
      });
    });
  });
});

