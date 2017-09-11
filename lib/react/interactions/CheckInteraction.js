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
      slug = _ref.slug;

  return _react2.default.createElement(_transactionsInterfaceWeb.IconButton, { className: 'button button--alive check-interaction',
    icon: 'pen',
    href: '/content/' + entityName + '/' + slug
  });
};

exports.default = CheckInteraction;