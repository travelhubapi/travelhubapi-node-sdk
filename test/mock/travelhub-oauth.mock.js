import TravelhubSDKOAuth from 'TravelhubSDKOAuth.js';
import travelhubOAuthMockJSON from './json/travelhub-oauth.json.js';

export default function load(nock) {
  nock(TravelhubSDKOAuth.HOMOLOG_HOST)
    .post('/oauth2/token', travelhubOAuthMockJSON.requestToken)
    .times(13)
    .reply(200, travelhubOAuthMockJSON.responseToken)
    .post('/oauth2/token', travelhubOAuthMockJSON.requestRefreshToken)
    .times(1)
    .reply(200, travelhubOAuthMockJSON.responseRefreshToken);


}
