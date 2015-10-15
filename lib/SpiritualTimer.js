"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpiritualTimer = (function () {
  function SpiritualTimer() {
    _classCallCheck(this, SpiritualTimer);
  }

  _createClass(SpiritualTimer, null, [{
    key: "setTimeout",
    value: (function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    })(function (method, time) {
      var startingTime = new Date().getTime();
      return setTimeout(function () {
        method(new Date().getTime() - startingTime);
      }, time);
    })
  }]);

  return SpiritualTimer;
})();

exports["default"] = SpiritualTimer;
module.exports = exports["default"];