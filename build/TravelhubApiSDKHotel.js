'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TravelhubApiSDKCommon = require('./TravelhubApiSDKCommon');

var _TravelhubApiSDKCommon2 = _interopRequireDefault(_TravelhubApiSDKCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TravelhubApiHotel = function () {
  _createClass(TravelhubApiHotel, null, [{
    key: 'HOMOLOG_HOST',
    get: function get() {
      return 'http://hotel.stg.travelhubapi.com.br';
    }
  }, {
    key: 'PRODUCTION_HOST',
    get: function get() {
      return 'http://hotel.travelhubapi.com.br';
    }
  }]);

  function TravelhubApiHotel(settings, oAuth) {
    _classCallCheck(this, TravelhubApiHotel);

    this.oauth = oAuth;
    this.version = 'v1';
    this.host = settings.enviroment === 'production' ? TravelhubApiHotel.PRODUCTION_HOST : TravelhubApiHotel.HOMOLOG_HOST;
  }

  _createClass(TravelhubApiHotel, [{
    key: 'getLocations',
    value: function getLocations(parameters) {
      var params = {};

      Object.assign(params, parameters);
      var description = params.description;
      delete params.description;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/locations/' + description,
        method: 'GET',
        qs: params
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'getAvailabilities',
    value: function getAvailabilities() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);

      var locationId = params.locationId;
      var checkIn = params.checkIn;
      var checkOut = params.checkOut;
      delete params.locationId;
      delete params.checkIn;
      delete params.checkOut;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/availabilities/' + locationId + '/' + checkIn + '/' + checkOut,
        method: 'GET',
        qs: params
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'getHotel',
    value: function getHotel() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var track = params.track;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/hotels/' + track,
        method: 'GET'
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'getFacilities',
    value: function getFacilities() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var track = params.track;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/hotels/' + track + '/facilities',
        method: 'GET'
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'getImages',
    value: function getImages() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var track = params.track;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/hotels/' + track + '/images',
        method: 'GET'
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'getCancellationPolicies',
    value: function getCancellationPolicies() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var checkIn = params.checkIn;
      var checkOut = params.checkOut;
      var fareType = params.fareType;
      delete params.checkIn;
      delete params.checkOut;
      delete params.fareType;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/bookings/' + checkIn + '/' + checkOut + '/cancellationPolicies',
        method: 'POST',
        body: params,
        qs: fareType ? { fareType: fareType } : undefined
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'book',
    value: function book(booking) {
      var requestOptions = {
        uri: this.host + '/' + this.version + '/bookings',
        method: 'POST',
        body: booking
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'getBooking',
    value: function getBooking() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var bookingCode = params.bookingCode;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/bookings/' + bookingCode,
        method: 'GET'
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }, {
    key: 'cancelBooking',
    value: function cancelBooking() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var code = params.code;
      var vendorId = params.vendorId;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/bookings/' + code + '/' + vendorId,
        method: 'DELETE'
      };

      return this.oauth.request(requestOptions).then(_TravelhubApiSDKCommon2.default.parseResponse);
    }
  }]);

  return TravelhubApiHotel;
}();

exports.default = TravelhubApiHotel;
module.exports = exports['default'];