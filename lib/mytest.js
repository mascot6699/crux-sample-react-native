"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Encryption1 = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// if (window !== undefined && window.crypto !== undefined) {
//     const crypto = window.crypto;
// } else {
//     // tslint:disable-next-line:no-var-requires
//     const crypto = require("crypto");
// }
// tslint:disable-next-line:no-var-requires
var crypto = require("react-native-crypto");

global.crypto = crypto;

var Encryption1 = function Encryption1() {
  _classCallCheck(this, Encryption1);
};

exports.Encryption1 = Encryption1;

_defineProperty(Encryption1, "digest",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(str) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9teXRlc3QudHMiXSwibmFtZXMiOlsiY3J5cHRvIiwicmVxdWlyZSIsImdsb2JhbCIsIkVuY3J5cHRpb24xIiwic3RyIiwic3VidGxlIiwiZGlnZXN0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLHVCQUF0Qjs7QUFLQUMsTUFBTSxDQUFDRixNQUFQLEdBQWdCQSxNQUFoQjs7SUFFYUcsVzs7Ozs7O2dCQUFBQSxXOzs7OzswQkFDYyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTkosTUFBTSxDQUFDSyxNQUFQLENBQWNDLE1BQWQsQ0FBcUIsU0FBckIsRUFBZ0MsSUFBSUMsV0FBSixHQUFrQkMsTUFBbEIsQ0FBeUJKLEdBQXpCLENBQWhDLENBRE07O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5jcnlwdG8gIT09IHVuZGVmaW5lZCkge1xuLy8gICAgIGNvbnN0IGNyeXB0byA9IHdpbmRvdy5jcnlwdG87XG4vLyB9IGVsc2Uge1xuLy8gICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby12YXItcmVxdWlyZXNcbi8vICAgICBjb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuLy8gfVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdmFyLXJlcXVpcmVzXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuaW50ZXJmYWNlIEdsb2JhbCB7XG4gICAgY3J5cHRvOiBhbnk7XG59XG5kZWNsYXJlIGNvbnN0IGdsb2JhbDogR2xvYmFsO1xuZ2xvYmFsLmNyeXB0byA9IGNyeXB0bztcblxuZXhwb3J0IGNsYXNzIEVuY3J5cHRpb24xIHtcbiAgICBwdWJsaWMgc3RhdGljIGRpZ2VzdCA9IGFzeW5jIChzdHI6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzdHIpKTtcbiAgICB9XG59XG4iXX0=