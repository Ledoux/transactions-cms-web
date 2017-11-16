'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _Explore = require('../tasks/Explore');

var _Explore2 = _interopRequireDefault(_Explore);

var _Travel = require('../tasks/Travel');

var _Travel2 = _interopRequireDefault(_Travel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentPage = function ContentPage(_ref) {
  var options = _ref.options,
      slug = _ref.slug;

  return _react2.default.createElement(
    'main',
    { className: 'main page content-page' },
    slug ? _react2.default.createElement(_Travel2.default, { options: options, slug: slug }) : _react2.default.createElement(_Explore2.default, { options: options })
  );
};

exports.default = (0, _transactionsCmsState.ContentPage)(ContentPage);