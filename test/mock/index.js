import nock from 'nock';
import travelhubApiOAuthMock from './travelhubapi-oauth.mock';
import travelhubApiHotelMock from './travelhubapi-hotel.mock';

travelhubApiOAuthMock(nock);
travelhubApiHotelMock(nock);
