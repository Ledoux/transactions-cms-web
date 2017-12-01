'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentPage = function ContentPage(_ref) {
  var task = _ref.task,
      TaskComponent = _ref.TaskComponent;

  return _react2.default.createElement(
    'main',
    { className: 'main page content-page' },
    task && _react2.default.createElement(TaskComponent, task)
  );
};

exports.default = (0, _transactionsCmsState.ContentPage)(ContentPage);