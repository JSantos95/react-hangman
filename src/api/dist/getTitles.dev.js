"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTitles = function getTitles() {
  _axios["default"].get("https://api.themoviedb.org/3/movie/top_rated?api_key=a5bf2e68ac98505ad392cb7cc10b4ca3&language=en-US&page=1").then(function (res) {
    var results = res.results;
    return results;
  }).then(function (err) {
    console.error(err);
  });
};

var _default = getTitles;
exports["default"] = _default;