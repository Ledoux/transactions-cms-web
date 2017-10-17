'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _Control = require('../components/Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var api = _ref.api,
      entity = _ref.entity,
      ContentComponent = _ref.ContentComponent,
      isControl = _ref.isControl;

  return _react2.default.createElement(
    'div',
    { className: 'card' },
    isControl && _react2.default.createElement(_Control2.default, null),
    _react2.default.createElement(ContentComponent, _extends({ api: api }, entity))
  );
};

exports.default = (0, _transactionsCmsState.Card)(Card);