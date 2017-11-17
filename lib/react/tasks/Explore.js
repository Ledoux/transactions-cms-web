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

var _Control = require('../components/Control');

var _Control2 = _interopRequireDefault(_Control);

var _List = require('../components/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Explore = function Explore(_ref) {
  var control = _ref.control,
      isControl = _ref.isControl,
      isShrinked = _ref.isShrinked,
      isSmall = _ref.isSmall,
      onExploreChange = _ref.onExploreChange,
      onSelectionClick = _ref.onSelectionClick,
      options = _ref.options,
      state = _ref.state,
      tag = _ref.tag;
  var selectedIndexes = state.selectedIndexes;

  var selectedOptions = selectedIndexes.map(function (selectedIndex) {
    return options[selectedIndex];
  });
  selectedOptions.sort(function (a, b) {
    return a.collectionName - b.collectionName;
  });
  var isSelection = options && options.length > 1;
  var isEmpty = selectedOptions.length === 0;
  return _react2.default.createElement(
    'div',
    { className: 'explore' },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('explore__control mt1', {
          'explore__control--shrinked': isShrinked
        }) },
      _react2.default.createElement(_Control2.default, _extends({ exploreState: state,
        onExploreChange: onExploreChange,
        options: selectedOptions,
        tag: tag
      }, control))
    ),
    _react2.default.createElement(
      'div',
      { className: 'explore__collections flex flex-wrap' },
      isSelection && options.map(function (_ref2, index) {
        var collectionName = _ref2.collectionName;

        var isSelected = selectedIndexes.includes(index);
        return _react2.default.createElement(
          _transactionsInterfaceWeb.Button,
          { className: (0, _classnames2.default)('button button--alive explore__collections__child', {
              'explore__collections__child--selected': isSelected
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
      { className: (0, _classnames2.default)('explore__items-containers', {
          'explore__items-containers--shrinked': isShrinked
        }) },
      !isEmpty && selectedOptions.map(function (selectedOption, index) {
        return _react2.default.createElement(
          'div',
          { className: 'explore__items-containers__child',
            key: index },
          isSelection && _react2.default.createElement(
            'p',
            { className: 'explore__items-containers__child__title' },
            selectedOption.collectionName
          ),
          _react2.default.createElement(_List2.default, _extends({ collectionName: selectedOption.collectionName,
            exploreState: state,
            isControl: true,
            isShrinked: isShrinked,
            isSmall: isSmall,
            onExploreChange: onExploreChange
          }, selectedOption))
        );
      })
    )
  );
};

exports.default = (0, _transactionsCmsState.Explore)(Explore);