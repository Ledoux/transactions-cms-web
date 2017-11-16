'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _Control = require('../components/Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardDecorator = function CardDecorator(_ref) {
  var content = _ref.content,
      ContentComponent = _ref.ContentComponent,
      entityName = _ref.entityName,
      isBorder = _ref.isBorder,
      isControl = _ref.isControl;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('card-decorator card-decorator--' + entityName, {
        'card-decorator--border': isBorder
      }) },
    isControl && _react2.default.createElement(_Control2.default, null),
    ContentComponent && _react2.default.createElement(ContentComponent, content)
  );
};

exports.default = (0, _transactionsCmsState.CardDecorator)(CardDecorator);