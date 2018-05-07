'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, extend = Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Components2.default.apply(undefined, extend.concat([[{
    label: 'Display',
    key: 'display',
    components: _TableEditOptions.TableEditOptions
  }]]));
};

var _TableEditOptions = require('./TableEditOptions');

var _Components = require('../Components.form');

var _Components2 = _interopRequireDefault(_Components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;