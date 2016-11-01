import TravelhubApiSDKOAuth from 'oauth/TravelhubApiSDKOAuth';
import travelhubApiOAuthMockJSON from './json/travelhubapi-oauth.json';

export default function load(nock) {
  nock(TravelhubApiSDKOAuth.homologHost)
    .post('/oauth2/token', travelhubApiOAuthMockJSON.requestToken)
    .times(19)
    .reply(200, travelhubApiOAuthMockJSON.responseToken)
    .post('/oauth2/token', travelhubApiOAuthMockJSON.requestRefreshToken)
    .times(2)
    .reply(200, travelhubApiOAuthMockJSON.responseRefreshToken)
    .get('/error')
    .reply(400, { message: 'An error ocurred...' }, {
      'X-Correlation-Id': 'X-Correlation-Id',
    });
}
