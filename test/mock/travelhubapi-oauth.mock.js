import TravelhubApiSDKOAuth from 'TravelhubApiSDKOAuth';
import travelhubApiOAuthMockJSON from './json/travelhubapi-oauth.json';

export default function load(nock) {
  nock(TravelhubApiSDKOAuth.HOMOLOG_HOST)
    .post('/oauth2/token', travelhubApiOAuthMockJSON.requestToken)
    .times(18)
    .reply(200, travelhubApiOAuthMockJSON.responseToken)
    .post('/oauth2/token', travelhubApiOAuthMockJSON.requestRefreshToken)
    .times(2)
    .reply(200, travelhubApiOAuthMockJSON.responseRefreshToken);
}
