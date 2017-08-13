'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require$default = require('transactions-interface-web').default,
    Button = _require$default.Button,
    Icon = _require$default.Icon;

var EditButton = function EditButton(_ref) {
  var history = _ref.history;

  return _react2.default.createElement(
    Button,
    {
      className: 'button button--alive edit-button',
      onClick: function onClick() {
        history.push(window.location.pathname + '?isEdit=true');
      }
    },
    _react2.default.createElement(Icon, { className: 'icon edit-button__icon', icon: 'pen' })
  );
};

exports.default = EditButton;