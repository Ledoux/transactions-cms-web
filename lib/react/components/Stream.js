'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _CardDecorator = require('../decorators/CardDecorator');

var _CardDecorator2 = _interopRequireDefault(_CardDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stream = function Stream(_ref) {
  var cardDecoratorProps = _ref.cardDecoratorProps,
      className = _ref.className,
      entities = _ref.entities,
      force = _ref.force,
      isBorder = _ref.isBorder,
      selectedIndex = _ref.selectedIndex;

  return _react2.default.createElement(
    'div',
    { className: className || 'stream' },
    entities && entities.map(function (entity, index) {
      return _react2.default.createElement(
        'div',
        { key: index, className: (0, _classnames2.default)('stream__element flex items-center justify-center', {
            'stream__element--selected': index === selectedIndex
          }) },
        _react2.default.createElement(_CardDecorator2.default, _extends({ entity: entity }, cardDecoratorProps))
      );
    })
  );
};

exports.default = (0, _transactionsCmsState.Stream)(Stream);