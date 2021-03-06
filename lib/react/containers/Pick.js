'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pick = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pick = exports.Pick = function Pick(_ref) {
  var className = _ref.className,
      content = _ref.content,
      ContentComponent = _ref.ContentComponent;

  return _react2.default.createElement(
    'div',
    { className: className || 'pick' },
    ContentComponent && _react2.default.createElement(ContentComponent, content)
  );
};

exports.default = (0, _transactionsCmsState.Pick)(Pick);