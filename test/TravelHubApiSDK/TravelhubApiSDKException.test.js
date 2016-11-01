import expect from 'expect.js';
import TravelhubApiSDKException from 'common/TravelHubApiSDKException.js';

describe('TravelHubApiSDKException', function () {
  it('should be a class (function)', function () {
    expect(TravelhubApiSDKException).to.be.a('function');
  });

  beforeEach(function () {
    this.response = {
      headers: {
        'x-correlation-id': 'X-Correlation-Id',
      },
      statusCode: 400,
      body: {
        message: 'An error ocurred...',
      },
    };

    this.request = function request(response) {
      throw new TravelhubApiSDKException(response);
    };
  });

  describe('Exceptions', function () {
    describe('response exception', function () {
      it('should expose correlation id', function () {
        expect(this.request).withArgs(this.response).to.throwException((e) => {
          expect(e).to.be.a(Error);
          expect(e.message).to.be.eql(this.response.body.message);
          expect(e.correlationId).to.be.eql(this.response.headers['x-correlation-id']);
          expect(e.statusCode).to.be.eql(this.response.statusCode);
        });
      });
    });
  });
});
