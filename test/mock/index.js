import nock from 'nock';
import travelhubApiOAuthMock from './travelhubapi-oauth.mock.js';
import travelhubApiHotelMock from './travelhubapi-hotel.mock.js';

travelhubApiOAuthMock(nock);
travelhubApiHotelMock(nock);
