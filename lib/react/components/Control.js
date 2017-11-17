'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(_ref) {
  var className = _ref.className,
      exploreState = _ref.exploreState,
      handleAddContent = _ref.handleAddContent,
      handleRequestContent = _ref.handleRequestContent,
      interactions = _ref.interactions,
      isAdd = _ref.isAdd,
      isSmall = _ref.isSmall,
      onChangeValue = _ref.onChangeValue,
      onKeyPress = _ref.onKeyPress,
      onExploreChange = _ref.onExploreChange,
      options = _ref.options,
      placeholder = _ref.placeholder;

  return _react2.default.createElement(
    'div',
    { className: className || 'control flex' },
    interactions && interactions.map(function (_ref2, index) {
      var getClassName = _ref2.getClassName,
          icon = _ref2.icon,
          _onClick = _ref2.onClick;
      return _react2.default.createElement(_transactionsInterfaceWeb.IconButton, { className: getClassName && getClassName(exploreState) || (0, _classnames2.default)('button icon-button button--alive control__button', {
          'control__button--small': isSmall
        }),
        key: index,
        icon: icon,
        onClick: function onClick(event) {
          return _onClick(event, exploreState);
        } });
    }),
    isAdd && _react2.default.createElement(_transactionsInterfaceWeb.IconButton, { className: (0, _classnames2.default)('button icon-button button--alive control__button', {
        'control__button--small': isSmall
      }),
      icon: 'plus',
      onClick: handleAddContent }),
    _react2.default.createElement(_transactionsInterfaceWeb.IconButton, { className: (0, _classnames2.default)('button icon-button button--alive control__button', {
        'control__button--small': isSmall
      }),
      icon: 'magnifying_glass',
      onClick: handleRequestContent
    }),
    _react2.default.createElement('input', { className: (0, _classnames2.default)('control__input flex-auto', {
        'control__input--small': isSmall,
        'control__input--add': isAdd
      }),
      type: 'text',
      placeholder: placeholder,
      onChange: onChangeValue,
      onKeyPress: onKeyPress })
  );
};

exports.default = (0, _transactionsCmsState.Control)(Control);