'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  var control = _ref.control,
      isControl = _ref.isControl,
      isEmpty = _ref.isEmpty,
      isSelection = _ref.isSelection,
      isShrinked = _ref.isShrinked,
      isSmall = _ref.isSmall,
      list = _ref.list,
      onSelectionClick = _ref.onSelectionClick,
      options = _ref.options,
      tag = _ref.tag,
      toggledOptions = _ref.toggledOptions;

  return _react2.default.createElement(
    'div',
    { className: 'explore-task explore-task--' + tag },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('explore-task__control mt1', {
          'explore-task__control--shrinked': isShrinked
        }) },
      _react2.default.createElement(_ControlBar2.default, _extends({ options: toggledOptions }, control))
    ),
    _react2.default.createElement(
      'div',
      { className: 'explore-task__collections flex flex-wrap' },
      isSelection && options.map(function (_ref2, index) {
        var collectionName = _ref2.collectionName;

        var isSelected = toggledIndexes.includes(index);
        return _react2.default.createElement(
          _transactionsInterfaceWeb.Button,
          { className: (0, _classnames2.default)('button button--alive explore-task__collections__child', {
              'explore-task__collections__child--selected': isSelected
            }),
            key: index,
            onClick: function onClick() {
              return onSelectionClick(index);
            } },
          collectionName
        );
      })
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('explore-task__items-containers', {
          'explore-task__items-containers--shrinked': isShrinked
        }) },
      !isEmpty && toggledOptions.map(function (selectedOption, index) {
        return _react2.default.createElement(
          'div',
          { className: 'explore-task__items-containers__child',
            key: index },
          isSelection && _react2.default.createElement(
            'div',
            { className: 'explore-task__items-containers__child__title' },
            selectedOption.collectionName
          ),
          _react2.default.createElement(_List2.default, _extends({}, list, {
            collectionName: selectedOption.collectionName
          }, selectedOption))
        );
      })
    )
  );
};

exports.default = (0, _transactionsCmsState.ExploreTask)(ExploreTask);