'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TravelhubApiSDKHotel = require('./TravelhubApiSDKHotel');

var _TravelhubApiSDKHotel2 = _interopRequireDefault(_TravelhubApiSDKHotel);

var _TravelhubApiSDKOAuth = require('./TravelhubApiSDKOAuth');

var _TravelhubApiSDKOAuth2 = _interopRequireDefault(_TravelhubApiSDKOAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TravelhubApiSDK = function () {
  function TravelhubApiSDK(settings) {
    _classCallCheck(this, TravelhubApiSDK);

    var config = {
      version: 'v1'
    };
    Object.assign(config, settings);
    this.oauth = new _TravelhubApiSDKOAuth2.default(config);
    this.hotel = new _TravelhubApiSDKHotel2.default(config, this.oauth);
  }

  _createClass(TravelhubApiSDK, [{
    key: 'request',
    value: function request(method, uri) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var opts = {
        uri: uri,
        method: method
      };
      Object.assign(opts, options);
      return this.oauth.request(opts);
    }
  }, {
    key: 'get',
    value: function get(uri, options) {
      return this.request('GET', uri, options);
    }
  }, {
    key: 'post',
    value: function post(uri, options) {
      return this.request('POST', uri, options);
    }
  }]);

  return TravelhubApiSDK;
}();

exports.default = TravelhubApiSDK;
module.exports = exports['default'];