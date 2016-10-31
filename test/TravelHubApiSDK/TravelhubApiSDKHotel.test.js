import expect from 'expect.js';
import TravelhubApiSDKOAuth from 'TravelhubApiSDKOAuth.js';
import TravelhubApiSDKHotel from 'TravelhubApiSDKHotel.js';
import travelhubApiHotelMockJSON from '../mock/json/travelhubapi-hotel.json.js';

describe('TravelHubApiSDKHotel', function () {
  it('should be a class (function)', function () {
    expect(TravelhubApiSDKHotel).to.be.a('function');
  });

  beforeEach(function () {
    const settings = {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      enviroment: 'staging',
      version: 'v1',
    };

    const oAuth = new TravelhubApiSDKOAuth(settings);
    this.hotel = new TravelhubApiSDKHotel(settings, oAuth);
  });

  describe('instance', function () {
    it('should be an instance of TravelHubApiSDKHotel', function () {
      expect(this.hotel).to.be.an(TravelhubApiSDKHotel);
    });


    it('should use production url', function () {
      const settings = {
        clientId: 'clientId',
        clientSecret: 'clientSecret',
        enviroment: 'production',
      };

      const hotel = new TravelhubApiSDKHotel(settings);
      expect(hotel.host).to.be(TravelhubApiSDKHotel.PRODUCTION_HOST);
    });
  });

  describe('functions', function () {
    describe('getLocations', function () {
      it('should be a function', function () {
        expect(this.hotel.getLocations).to.be.a('function');
      });

      it('should get locations', function () {
        return this.hotel.getLocations({ description: 'description' })
          .then(function (result) {
            const locations = result.content;
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
          locationId: 'locationId',
          checkIn: '2016-10-20',
          checkOut: '2016-10-30',
          rooms: [
            {
              adt: 1,
              chd: 2,
              bed: 'Double',
            },
          ],
        };

        return this.hotel.getAvailabilities(params)
          .then(function (result) {
            const availabilities = result.content;
            expect(availabilities).to.eql(travelhubApiHotelMockJSON.responseAvailabilities);
          });
      });
    });

    describe('getHotel', function () {
      it('should be a function', function () {
        expect(this.hotel.getHotel).to.be.a('function');
      });

      it('should get hotel', function () {
        return this.hotel.getHotel({ track: 'track' })
          .then(function (result) {
            const hotel = result.content;
            expect(hotel).to.eql(travelhubApiHotelMockJSON.responseHotel);
          });
      });
    });

    describe('getFacilities', function () {
      it('should be a function', function () {
        expect(this.hotel.getFacilities).to.be.a('function');
      });

      it('should get facilities', function () {
        return this.hotel.getFacilities({ track: 'track' })
          .then(function (result) {
            const facilities = result.content;
            expect(facilities).to.eql(travelhubApiHotelMockJSON.responseFacilities);
          });
      });
    });

    describe('getImages', function () {
      it('should be a function', function () {
        expect(this.hotel.getImages).to.be.a('function');
      });

      it('should get facilities', function () {
        return this.hotel.getImages({ track: 'track' })
          .then(function (result) {
            const images = result.content;
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
          accommodations: {
            items: [
              {
                code: '0',
                name: 'standard',
                guests: {
                  items: [
                    {
                      guestType: 'Adt',
                    },
                    {
                      guestType: 'Chd',
                      age: 11,
                    },
                  ],
                },
                fares: {
                  items: [
                    {
                      rateCode: '13415265',
                      agreement: 'AGT',
                      mealPlan: {
                        code: '3449',
                        name: 'Café da Manhã',
                      },
                    },
                  ],
                },
              },
            ],
          },
        };

        return this.hotel.getCancellationPolicies(params)
          .then(function (result) {
            const cancellationPolicies = result.content;
            expect(cancellationPolicies).to.eql(
              travelhubApiHotelMockJSON.responseCancellationPolicies
            );
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
            const booking = result.content;
            expect(booking).to.eql(travelhubApiHotelMockJSON.responseBooking);
          });
      });
    });

    describe('getBooking', function () {
      it('should be a function', function () {
        expect(this.hotel.getBooking).to.be.a('function');
      });

      it('should get booking', function () {
        return this.hotel.getBooking({ bookingCode: 'bookingCode' })
          .then(function (result) {
            const booking = result.content;
            expect(booking).to.eql(travelhubApiHotelMockJSON.responseBooking);
          });
      });
    });

    describe('cancelBooking', function () {
      it('should be a function', function () {
        expect(this.hotel.cancelBooking).to.be.a('function');
      });

      it('should get booking', function () {
        return this.hotel.cancelBooking({ code: 'code', vendorId: 'vendorId' })
          .then(function (result) {
            expect(result.statusCode).to.be(204);
          });
      });
    });
  });
});
