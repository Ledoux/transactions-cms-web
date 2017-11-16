'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pick = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _CardDecorator = require('../decorators/CardDecorator');

var _CardDecorator2 = _interopRequireDefault(_CardDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pick = exports.Pick = function Pick(_ref) {
  var cardDecoratorProps = _ref.cardDecoratorProps;

  return _react2.default.createElement(
    'div',
    { className: 'pick' },
    _react2.default.createElement(_CardDecorator2.default, cardDecoratorProps)
  );
};

exports.default = (0, _transactionsCmsState.Pick)(Pick);