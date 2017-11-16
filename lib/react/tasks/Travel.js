'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _Pick = require('../components/Pick');

var _Pick2 = _interopRequireDefault(_Pick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Travel = function Travel(_ref) {
  var slug = _ref.slug;

  console.log('slug', slug);
  return _react2.default.createElement(
    'div',
    { className: 'travel' },
    _react2.default.createElement(_Pick2.default, { slug: slug, isTitle: true })
  );
};

exports.default = (0, _transactionsCmsState.Travel)(Travel);