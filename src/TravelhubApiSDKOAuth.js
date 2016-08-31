import simpleOAuth2 from 'simple-oauth2';
import requestPromise from 'request-promise';
import Promise from 'bluebird';

export default class TravelhubApiSDKOAuth {

  static get HOMOLOG_HOST() {
    return 'http://auth.stg.travelhubapi.com.br';
  }

  static get PRODUCTION_HOST() {
    return 'http://auth.travelhubapi.com.br';
  }

  constructor(settings) {
    const credentials = {
      clientID: settings.clientId,
      clientSecret: settings.clientSecret,
      site: settings.enviroment === 'production' ? TravelhubApiSDKOAuth.PRODUCTION_HOST : TravelhubApiSDKOAuth.HOMOLOG_HOST,
      authorizationPath: '/oauth2',
      tokenPath: '/oauth2/token'
    }
    this.oauth = simpleOAuth2(credentials);
    this.accessToken = settings.token;
  }

  request(opts) {
    return this.getToken()
      .then(function (token) {

        opts.auth = {
          'bearer': token.access_token
        }

        return requestPromise(opts);
      });
  }

  getToken(params) {
    params = params || {};

    if(!this.accessToken || params.forceCreate) {
      return this.createToken();
    }

    if (this.accessToken.expired()) {
      return this.refreshToken();
    }

    return new Promise((resolve) => {
      resolve(this.accessToken.token);
    });

  }

  createToken() {
    return this.oauth.client.getToken({})
      .then((result) => {
        this.accessToken = this.oauth.accessToken.create(result);
        return this.accessToken.token;
      })
  }

  refreshToken() {
    return this.accessToken.refresh()
      .then((accessToken) => {
        this.accessToken = accessToken;
        return this.accessToken.token;
      });
  }

}
