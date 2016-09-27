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
    this.host = settings.enviroment === 'production' ?
          TravelhubApiSDKOAuth.PRODUCTION_HOST : TravelhubApiSDKOAuth.HOMOLOG_HOST;
    const credentials = {
      client: {
        id: settings.clientId,
        secret: settings.clientSecret,
      },
      auth: {
        tokenHost: this.host,
        authorizePath: '/oauth2',
        tokenPath: '/oauth2/token',
      },
    };
    this.oauth = simpleOAuth2.create(credentials);
    this.accessToken = settings.token;
  }

  request(opts) {
    return this.getToken()
      .then((token) => {
        opts.auth = {
          bearer: token.access_token,
        };

        return requestPromise(opts);
      });
  }

  getToken(params) {
    params = params || {};
    if (!this.accessToken || params.forceCreate) {
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
    return this.oauth.clientCredentials.getToken({})
      .then((result) => {
        this.accessToken = this.oauth.accessToken.create(result);
        return this.accessToken.token;
      });
  }

  refreshToken() {
    return this.accessToken.refresh()
      .then((accessToken) => {
        this.accessToken = accessToken;
        return this.accessToken.token;
      });
  }

}
