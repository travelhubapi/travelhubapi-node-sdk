import expect from 'expect.js';
import TravelhubApiSDKOAuth from 'TravelhubApiSDKOAuth.js';
import travelhubApiOAuthMockJSON from './mock/json/travelhubapi-oauth.json.js';

describe('TravelhubApiSDKOAuth', function () {
  it('should be a class (function)', function () {
    expect(TravelhubApiSDKOAuth).to.be.a('function');
  });

  beforeEach(function () {
    const settings = {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      enviroment: 'staging',
      version: 'v1',
    };

    this.oauth = new TravelhubApiSDKOAuth(settings);
  });

  describe('instance', function () {
    it('should be an instance of TravelhubApiSDKOAuth', function () {
      expect(this.oauth).to.be.an(TravelhubApiSDKOAuth);
    });
  });

  describe('functions', function () {
    describe('request', function () {
      it('should be a function', function () {
        expect(this.oauth.request).to.be.a('function');
      });
    });
    describe('getToken', function () {
      it('should be a function', function () {
        expect(this.oauth.getToken).to.be.a('function');
      });

      it('should get access token', function () {
        return this.oauth.getToken()
          .then(function (token) {
            expect(token.access_token).to.be(travelhubApiOAuthMockJSON.responseToken.access_token);
          });
      });
    });
    describe('createToken', function () {
      it('should be a function', function () {
        expect(this.oauth.createToken).to.be.a('function');
      });

      it('should create access token', function () {
        return this.oauth.createToken()
          .then(function (token) {
            expect(token.access_token).to.be(travelhubApiOAuthMockJSON.responseToken.access_token);
          });
      });
    });
    describe('refreshToken', function () {
      it('should be a function', function () {
        expect(this.oauth.refreshToken).to.be.a('function');
      });

      it('should refresh access token', function () {
        return this.oauth.createToken()
          .then((token) => {
            expect(token.access_token).to.be(travelhubApiOAuthMockJSON.responseToken.access_token);
            return this.oauth.refreshToken();
          })
          .then(function (token) {
            expect(token.access_token).to.be(
              travelhubApiOAuthMockJSON.responseRefreshToken.access_token
            );
          });
      });
    });
  });
});

