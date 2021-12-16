"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// for...of
var colors = ["Blue", "Green", "Red", "Yellow"];

for (var _i = 0, _colors = colors; _i < _colors.length; _i++) {
  var color = _colors[_i];
  console.log(color);
}

var iterator = colors[Symbol.iterator]();
var person = {
  name: "Maria",
  city: "Paris",
  color: "Red"
};

for (var _i2 = 0, _Object$entries = Object.entries(person); _i2 < _Object$entries.length; _i2++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];

  console.log(key, value);
}