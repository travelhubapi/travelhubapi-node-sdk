import expect from 'expect.js';
import './TravelHubApiSDK/TravelhubApiSDK.test.js';
import './TravelHubApiSDK/TravelhubApiSDKHotel.test.js';
import './TravelHubApiSDK/TravelhubApiSDKOAuth.test.js';
import './TravelHubApiSDK/TravelhubApiSDKCommon.test.js';
import './TravelHubApiSDK/TravelhubApiSDKException.test.js';

describe('Mocks', function () {
  it('All expectations should have been met', function () {
    expect(nock.isDone()).to.be(true);
    expect(nock.pendingMocks()).to.have.length(0);
  });
});
