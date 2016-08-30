import TravelhubSDK from 'TravelhubSDK.js';
import TravelhubSDKOAuth from 'TravelhubSDKOAuth.js';
import expect from 'expect.js';
import travelhubOAuthMockJSON from './mock/json/travelhub-oauth.json.js';

describe('TravelhubSDKOAuth', function() {

  it('should be a class (function)', function () {
    expect(TravelhubSDKOAuth).to.be.a('function');
  });

  beforeEach(function () {
    this.travelhubSDK = new TravelhubSDK({
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      production: false
    });
  });

  describe('instance', function() {

    it('should be an instance of TravelhubSDKOAuth', function () {
      expect(this.travelhubSDK.oauth).to.be.an(TravelhubSDKOAuth);
    });
  });

  describe('functions', function() {
    describe('request', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.oauth.request).to.be.a('function');
      });
    });
    describe('getToken', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.oauth.getToken).to.be.a('function');
      });

      it('should get access token', function () {
        return this.travelhubSDK.oauth.getToken()
          .then(function (token) {
            expect(token.access_token).to.be(travelhubOAuthMockJSON.responseToken.access_token);
          });
      });
    });
    describe('createToken', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.oauth.createToken).to.be.a('function');
      });

      it('should create access token', function () {
        return this.travelhubSDK.oauth.createToken()
          .then(function (token) {
            expect(token.access_token).to.be(travelhubOAuthMockJSON.responseToken.access_token);
          });
      });
    });
    describe('refreshToken', function () {
      it('should be a function', function () {
        expect(this.travelhubSDK.oauth.refreshToken).to.be.a('function');
      });

      it('should refresh access token', function () {
        return this.travelhubSDK.oauth.createToken()
          .then((token) => {
            expect(token.access_token).to.be(travelhubOAuthMockJSON.responseToken.access_token);
            return this.travelhubSDK.oauth.refreshToken();
          })
          .then(function (token) {
            expect(token.access_token).to.be(travelhubOAuthMockJSON.responseRefreshToken.access_token);
          });
      });
    });
  });
});

