'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _transactionsCmsState = require('transactions-cms-state');

var _SlugPick = require('../components/SlugPick');

var _SlugPick2 = _interopRequireDefault(_SlugPick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Travel = function Travel(_ref) {
  var pickProps = _ref.pickProps;

  return _react2.default.createElement(
    'div',
    { className: 'travel' },
    _react2.default.createElement(_SlugPick2.default, pickProps)
  );
};

exports.default = (0, _transactionsCmsState.Travel)(Travel);