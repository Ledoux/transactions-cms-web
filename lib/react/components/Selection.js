'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ExploreTask = require('../tasks/ExploreTask');

var _ExploreTask2 = _interopRequireDefault(_ExploreTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selection = function Selection(_ref) {
  var selectedExplore = _ref.selectedExplore,
      selectingExplore = _ref.selectingExplore;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ExploreTask2.default, selectedExplore),
    _react2.default.createElement(_ExploreTask2.default, selectingExplore)
  );
};

exports.default = Selection;