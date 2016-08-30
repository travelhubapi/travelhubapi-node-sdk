'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TravelhubSDKHotel = require('./TravelhubSDKHotel');

var _TravelhubSDKHotel2 = _interopRequireDefault(_TravelhubSDKHotel);

var _TravelhubSDKOAuth = require('./TravelhubSDKOAuth');

var _TravelhubSDKOAuth2 = _interopRequireDefault(_TravelhubSDKOAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TravelhubSDK = function TravelhubSDK(settings) {
  _classCallCheck(this, TravelhubSDK);

  settings.version = settings.version || 'v1';
  this.oauth = new _TravelhubSDKOAuth2.default(settings);
  this.hotel = new _TravelhubSDKHotel2.default(settings, this.oauth);
};

exports.default = TravelhubSDK;