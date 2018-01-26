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

var ControlBar = function ControlBar(_ref) {
  var className = _ref.className,
      handleAddContent = _ref.handleAddContent,
      handleRequestContent = _ref.handleRequestContent,
      isAdd = _ref.isAdd,
      isLoadingActive = _ref.isLoadingActive,
      isSmall = _ref.isSmall,
      onChangeValue = _ref.onChangeValue,
      onKeyPress = _ref.onKeyPress,
      options = _ref.options,
      placeholder = _ref.placeholder;

  return _react2.default.createElement(
    'div',
    { className: className || 'control-bar flex' },
    isAdd && _react2.default.createElement(_transactionsInterfaceWeb.IconButton, { className: (0, _classnames2.default)('button icon-button button--alive control-bar__button', {
        'control-bar__button--small': isSmall
      }),
      icon: 'plus',
      onClick: handleAddContent
    }),
    isLoadingActive ? _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('button icon-button control-bar__button', {
          'control-bar__button--small': isSmall
        }) },
      ' ',
      _react2.default.createElement(_transactionsInterfaceWeb.Loading, null),
      ' '
    ) : _react2.default.createElement(_transactionsInterfaceWeb.IconButton, { className: (0, _classnames2.default)('button icon-button button--alive control-bar__button', {
        'control-bar__button--small': isSmall
      }),
      icon: 'magnifying_glass',
      onClick: handleRequestContent
    }),
    _react2.default.createElement('input', { className: (0, _classnames2.default)('control-bar__input flex-auto', {
        'control__input--small': isSmall,
        'control__input--add': isAdd
      }),
      type: 'text',
      placeholder: placeholder,
      onChange: onChangeValue,
      onKeyPress: onKeyPress
    })
  );
};

exports.default = (0, _transactionsCmsState.ControlBar)(ControlBar);