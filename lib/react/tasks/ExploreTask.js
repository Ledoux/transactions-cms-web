'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _ControlBar = require('../components/ControlBar');

var _ControlBar2 = _interopRequireDefault(_ControlBar);

var _List = require('../containers/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExploreTask = function ExploreTask(_ref) {
  var collectionName = _ref.collectionName,
      control = _ref.control,
      isControl = _ref.isControl,
      isShrinked = _ref.isShrinked,
      isSmall = _ref.isSmall,
      list = _ref.list,
      tag = _ref.tag;

  return _react2.default.createElement(
    'div',
    { className: 'explore-task explore-task--' + tag },
    isControl && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('explore-task__control mt1', {
          'explore-task__control--shrinked': isShrinked
        }) },
      _react2.default.createElement(_ControlBar2.default, control)
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('explore-task__list', {
          'explore-task__list--shrinked': isShrinked
        }) },
      _react2.default.createElement(_List2.default, list)
    )
  );
};

exports.default = (0, _transactionsCmsState.ExploreTask)(ExploreTask);