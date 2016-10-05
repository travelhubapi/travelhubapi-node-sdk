'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    this.version = settings.version;
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

      return this.oauth.request(requestOptions);
    }
  }, {
    key: 'getAvailabilities',
    value: function getAvailabilities() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);

      var destination = params.destination;
      var checkIn = params.checkIn;
      var checkOut = params.checkOut;
      delete params.destination;
      delete params.checkIn;
      delete params.checkOut;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/availabilities/' + destination + '/' + checkIn + '/' + checkOut,
        method: 'GET',
        qs: params
      };

      return this.oauth.request(requestOptions);
    }
  }, {
    key: 'get',
    value: function get() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var hotelCode = params.hotelCode;
      var broker = params.broker;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/hotel/' + hotelCode + '/' + broker,
        method: 'GET'
      };

      return this.oauth.request(requestOptions);
    }
  }, {
    key: 'getFacilities',
    value: function getFacilities() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var hotelCode = params.hotelCode;
      var broker = params.broker;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/hotel/' + hotelCode + '/' + broker + '/facilities',
        method: 'GET'
      };

      return this.oauth.request(requestOptions);
    }
  }, {
    key: 'getImages',
    value: function getImages() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var hotelCode = params.hotelCode;
      var broker = params.broker;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/hotel/' + hotelCode + '/' + broker + '/images',
        method: 'GET'
      };

      return this.oauth.request(requestOptions);
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

      return this.oauth.request(requestOptions);
    }
  }, {
    key: 'book',
    value: function book(booking) {
      var requestOptions = {
        uri: this.host + '/' + this.version + '/bookings',
        method: 'POST',
        body: booking
      };

      return this.oauth.request(requestOptions);
    }
  }, {
    key: 'getHighlights',
    value: function getHighlights() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      var highlightType = params.highlightType || 'all';
      delete params.highlightType;
      var requestOptions = {
        uri: this.host + '/' + this.version + '/hotels/' + highlightType + '/highlights',
        method: 'GET',
        qs: params
      };

      return this.oauth.request(requestOptions);
    }
  }, {
    key: 'getNationalHighlights',
    value: function getNationalHighlights() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      params.highlightType = 'national';
      return this.getHighlights(params);
    }
  }, {
    key: 'getInternationalHighlights',
    value: function getInternationalHighlights() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var params = {};

      Object.assign(params, parameters);
      params.highlightType = 'international';
      return this.getHighlights(params);
    }
  }]);

  return TravelhubApiHotel;
}();

exports.default = TravelhubApiHotel;
module.exports = exports['default'];