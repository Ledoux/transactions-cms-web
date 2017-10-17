'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Explore = require('./Explore');

var _Explore2 = _interopRequireDefault(_Explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selection = function Selection(_ref) {
  var selectedExplore = _ref.selectedExplore,
      selectingExplore = _ref.selectingExplore;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Explore2.default, selectedExplore),
    _react2.default.createElement(_Explore2.default, selectingExplore)
  );
};

exports.default = Selection;