"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTitles = function getTitles() {
  return _axios["default"].get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(process.env.REACT_APP_API_KEY, "&language=en-US&page=1")).then(function (_ref) {
    var data = _ref.data;
    return data;
  })["catch"](function (err) {
    console.error(err);
  });
};

var _default = getTitles;
exports["default"] = _default;