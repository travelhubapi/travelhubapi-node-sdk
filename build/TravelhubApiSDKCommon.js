'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TravelhubApiSDKCommon = function () {
  function TravelhubApiSDKCommon() {
    _classCallCheck(this, TravelhubApiSDKCommon);
  }

  _createClass(TravelhubApiSDKCommon, null, [{
    key: 'parseResponse',
    value: function parseResponse(response) {
      var result = {
        content: response.body,
        statusCode: response.statusCode,
        headers: Object.assign({}, response.headers),
        correlationId: response.headers['x-correlation-id']
      };
      return _bluebird2.default.resolve(result);
    }
  }]);

  return TravelhubApiSDKCommon;
}();

exports.default = TravelhubApiSDKCommon;
module.exports = exports['default'];