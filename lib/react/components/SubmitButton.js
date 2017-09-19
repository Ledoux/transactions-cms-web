'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitButton = function SubmitButton(_ref) {
  var className = _ref.className,
      isAllowed = _ref.isAllowed,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    _transactionsInterfaceWeb.Button,
    { className: (0, _classnames2.default)(className || 'button button--alive submit-button', {
        'button--disabled': !isAllowed
      }),
      disabled: !isAllowed,
      onClick: onClick },
    'Submit'
  );
};

exports.default = (0, _transactionsCmsState.SubmitButton)(SubmitButton);