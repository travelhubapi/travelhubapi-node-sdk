import TravelhubApiSDKOAuth from 'TravelhubApiSDKOAuth';
import travelhubApiOAuthMockJSON from './json/travelhubapi-oauth.json';

export default function load(nock) {
  nock(TravelhubApiSDKOAuth.HOMOLOG_HOST)
    .post('/oauth2/token', travelhubApiOAuthMockJSON.requestToken)
    .times(13)
    .reply(200, travelhubApiOAuthMockJSON.responseToken)
    .post('/oauth2/token', travelhubApiOAuthMockJSON.requestRefreshToken)
    .times(1)
    .reply(200, travelhubApiOAuthMockJSON.responseRefreshToken);
}
