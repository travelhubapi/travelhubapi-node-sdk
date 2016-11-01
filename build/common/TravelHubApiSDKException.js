'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TravelHubApiSDKException = function (_Error) {
  _inherits(TravelHubApiSDKException, _Error);

  function TravelHubApiSDKException(response) {
    _classCallCheck(this, TravelHubApiSDKException);

    var _this = _possibleConstructorReturn(this, (TravelHubApiSDKException.__proto__ || Object.getPrototypeOf(TravelHubApiSDKException)).call(this, response.body.message));

    _this.correlationId = response.headers['x-correlation-id'];
    _this.statusCode = response.statusCode;

    _this.name = 'TravelHubApiSDKException';
    return _this;
  }

  return TravelHubApiSDKException;
}(Error);

exports.default = TravelHubApiSDKException;
module.exports = exports['default'];