import simpleOAuth2 from 'simple-oauth2';
import requestPromise from 'request-promise';
import Promise from 'bluebird';
import TravelHubApiSDKException from '../common/TravelHubApiSDKException';

export default class TravelhubApiSDKOAuth {

  static get homologHost() {
    return 'http://auth.stg.travelhubapi.com.br';
  }

  static get productionHost() {
    return 'http://auth.travelhubapi.com.br';
  }

  constructor(settings) {
    this.host = settings.enviroment === 'production' ?
          TravelhubApiSDKOAuth.productionHost : TravelhubApiSDKOAuth.homologHost;
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
    this.language = settings.language || 'pt-BR';
  }

  request(opts = {}) {
    return this.getToken()
      .then((token) => {
        const options = {
          auth: {
            bearer: token.access_token,
          },
          headers: {
            'Accept-Language': this.language,
          },
          resolveWithFullResponse: true,
          json: true,
        };

        Object.assign(options, opts);

        return requestPromise(options);
      })
      .catch((e) => {
        if (e && e.statusCode > 399 && e.response && e.response.body) {
          throw new TravelHubApiSDKException(e.response);
        }
        throw e;
      });
  }

  getToken(parameters = {}) {
    if (!this.accessToken || parameters.forceCreate) {
      return this.createToken();
    }

    if (this.accessToken.expired()) {
      return this.refreshToken();
    }

    return Promise.resolve(this.accessToken.token);
  }

  createToken() {
    return this.oauth.clientCredentials.getToken()
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
