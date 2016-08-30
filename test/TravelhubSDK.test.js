import TravelhubSDK from 'TravelhubSDK.js';
import expect from 'expect.js';

describe('TravelHubSDK', function() {

  it('should be a class (function)', function () {
    expect(TravelhubSDK).to.be.a('function');
  });

  describe('instance', function() {

    beforeEach(function () {
      this.travelhubSDK = new TravelhubSDK({});
    });

    it('should be an instance of TravelHubSDK', function () {
      expect(this.travelhubSDK).to.be.an(TravelhubSDK);
    });
  });
});

