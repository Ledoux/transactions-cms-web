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

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Explore = function Explore(_ref) {
  var extra = _ref.extra,
      getRequestQuery = _ref.getRequestQuery,
      inputTemplate = _ref.inputTemplate,
      interactions = _ref.interactions,
      isAdd = _ref.isAdd,
      isSearch = _ref.isSearch,
      isShrinked = _ref.isShrinked,
      isSmall = _ref.isSmall,
      label = _ref.label,
      onExploreChange = _ref.onExploreChange,
      onSelectionClick = _ref.onSelectionClick,
      options = _ref.options,
      placeholder = _ref.placeholder,
      state = _ref.state;
  var explore = state.explore,
      selectedIndexes = state.selectedIndexes;

  var selectedOptions = selectedIndexes.map(function (selectedIndex) {
    return options[selectedIndex];
  });
  selectedOptions.sort(function (a, b) {
    return a.collectionName - b.collectionName;
  });
  var isSelection = options && options.length > 1;
  var isLists = selectedOptions.length > 0;
  return _react2.default.createElement(
    'div',
    { className: 'explore' },
    isSearch && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('explore__search', {
          'explore__search--shrinked': isShrinked
        }) },
      _react2.default.createElement(_Search2.default, {
        exploreState: state,
        getRequestQuery: getRequestQuery,
        interactions: interactions,
        inputTemplate: inputTemplate,
        isAdd: true,
        label: label,
        onExploreChange: onExploreChange,
        options: selectedOptions,
        placeholder: placeholder
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'explore__collections flex flex-wrap' },
      isSelection && options.map(function (_ref2, index) {
        var collectionName = _ref2.collectionName;

        var isSelected = selectedIndexes.includes(index);
        return _react2.default.createElement(
          _transactionsInterfaceWeb.Button,
          {
            className: (0, _classnames2.default)('button button--alive explore__collections__child', {
              'explore__collections__child--selected': isSelected
            }),
            key: index,
            onClick: onSelectionClick
          },
          collectionName
        );
      })
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('explore__lists', {
          'explore__lists--shrinked': isShrinked
        }) },
      isLists && selectedOptions.map(function (selectedOption, index) {
        return _react2.default.createElement(
          'div',
          {
            className: 'explore__lists__child',
            key: index
          },
          isSelection && _react2.default.createElement(
            'p',
            { className: 'explore__lists__child__title' },
            selectedOption.collectionName
          ),
          _react2.default.createElement(_List2.default, _extends({ collectionName: selectedOption.collectionName,
            exploreState: state,
            isSearch: isSearch,
            isShrinked: isShrinked,
            isSmall: isSmall,
            label: label,
            onExploreChange: onExploreChange
          }, selectedOption))
        );
      })
    )
  );
};

exports.default = (0, _transactionsCmsState.Explore)(Explore);