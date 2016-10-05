'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TravelhubApiSDKHotel = require('./TravelhubApiSDKHotel');

var _TravelhubApiSDKHotel2 = _interopRequireDefault(_TravelhubApiSDKHotel);

var _TravelhubApiSDKOAuth = require('./TravelhubApiSDKOAuth');

var _TravelhubApiSDKOAuth2 = _interopRequireDefault(_TravelhubApiSDKOAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TravelhubApiSDK = function TravelhubApiSDK(settings) {
  _classCallCheck(this, TravelhubApiSDK);

  var config = {
    version: 'v1'
  };
  Object.assign(config, settings);
  this.oauth = new _TravelhubApiSDKOAuth2.default(settings);
  this.hotel = new _TravelhubApiSDKHotel2.default(settings, this.oauth);
};

exports.default = TravelhubApiSDK;