'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditButton = function EditButton(_ref) {
  var pathname = _ref.pathname,
      push = _ref.push;

  return _react2.default.createElement(
    _transactionsInterfaceWeb.Button,
    {
      className: 'button button--alive edit-button',
      onClick: function onClick() {
        push(pathname + '?isEdit=true');
      }
    },
    _react2.default.createElement(_transactionsInterfaceWeb.Icon, { className: 'icon edit-button__icon', icon: 'pen' })
  );
};

exports.default = (0, _transactionsCmsState.EditButton)(EditButton);