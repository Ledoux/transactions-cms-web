'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transactionsCmsState = require('transactions-cms-state');

var _Pick = require('./Pick');

var _Pick2 = _interopRequireDefault(_Pick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlugPick = (0, _transactionsCmsState.SlugPick)(_Pick2.default);

exports.default = SlugPick;