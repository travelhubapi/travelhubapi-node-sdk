import expect from 'expect.js';
import Common from 'TravelhubApiSDKCommon.js';

describe('TravelHubApiSDKCommon', function () {
  it('should be a class (function)', function () {
    expect(Common).to.be.a('function');
  });

  beforeEach(function () {
    this.responseSuccess = {
      headers: {
        'x-correlation-id': 'X-Correlation-Id',
      },
      statusCode: 200,
      body: {},
    };
  });

  describe('functions', function () {
    describe('parseResponse', function () {
      it('should be a function', function () {
        expect(Common.parseResponse).to.be.a('function');
      });

      it('should parse a success response', function () {
        return Common.parseResponse(this.responseSuccess)
          .then((parsedResponse) => {
            expect(parsedResponse).to.be.eql({
              headers: {
                'x-correlation-id': 'X-Correlation-Id',
              },
              correlationId: 'X-Correlation-Id',
              statusCode: 200,
              content: {},
            });
          });
      });

      it('should parse a success response without body', function () {
        const responseWithoutBody = {};

        Object.assign(responseWithoutBody, this.responseSuccess);

        delete responseWithoutBody.body;

        responseWithoutBody.statusCode = 204;

        return Common.parseResponse(responseWithoutBody)
          .then((parsedResponse) => {
            expect(parsedResponse).to.be.eql({
              headers: {
                'x-correlation-id': 'X-Correlation-Id',
              },
              correlationId: 'X-Correlation-Id',
              statusCode: 204,
              content: undefined,
            });
          });
      });
    });
  });
});
