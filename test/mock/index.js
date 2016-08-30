import nock from 'nock';
import travelhubOAuthMock from './travelhub-oauth.mock.js';
import travelhubHotelMock from './travelhub-hotel.mock.js';

travelhubOAuthMock(nock);
travelhubHotelMock(nock);
