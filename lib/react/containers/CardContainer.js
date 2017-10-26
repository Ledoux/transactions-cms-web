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

var _Control = require('../components/Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardContainer = function CardContainer(_ref) {
  var entity = _ref.entity,
      entityId = _ref.entityId,
      entityName = _ref.entityName,
      ContentComponent = _ref.ContentComponent,
      isBorder = _ref.isBorder,
      isControl = _ref.isControl;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('card-container card-container--' + entityName, {
        'card-container--border': isBorder
      }) },
    isControl && _react2.default.createElement(_Control2.default, null),
    _react2.default.createElement(ContentComponent, _extends({ id: entityId }, entity))
  );
};

exports.default = (0, _transactionsCmsState.CardContainer)(CardContainer);