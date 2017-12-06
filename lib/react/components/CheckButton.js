'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckInteraction = function CheckInteraction(_ref) {
  var entityName = _ref.entityName,
      icon = _ref.icon,
      isEdit = _ref.isEdit,
      slug = _ref.slug;

  var href = '/content/' + entityName + '/' + slug;
  if (isEdit) {
    href = href + '?isEdit=true';
  }
  return _react2.default.createElement(_transactionsInterfaceWeb.IconButton, { className: 'button button--alive check-button',
    icon: icon || isEdit ? 'pen' : 'eye',
    href: href });
};

exports.default = CheckInteraction;