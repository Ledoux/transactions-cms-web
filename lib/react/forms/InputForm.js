'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDebounceInput = require('react-debounce-input');

var _reactDebounceInput2 = _interopRequireDefault(_reactDebounceInput);

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputForm = function InputForm(_ref) {
  var className = _ref.className,
      entity = _ref.entity,
      handleChangeValue = _ref.handleChangeValue,
      initialValue = _ref.initialValue,
      isFrozen = _ref.isFrozen,
      isHTML = _ref.isHTML,
      itemProp = _ref.itemProp,
      itemScope = _ref.itemScope,
      itemType = _ref.itemType,
      label = _ref.label,
      name = _ref.name,
      state = _ref.state,
      slug = _ref.slug,
      valueItemProp = _ref.valueItemProp;
  var value = state.value;

  if (typeof value !== 'string') {
    value = initialValue || '';
  }
  var info = value === initialValue ? '(FOUND)' : entity ? '(NEW FOUND)' : '(NEW)';
  return _react2.default.createElement(
    'div',
    { className: className || 'input-form',
      itemProp: itemProp,
      itemScope: itemScope,
      itemType: itemType
    },
    !isFrozen && _react2.default.createElement(
      'div',
      { className: 'input-form__title' },
      _react2.default.createElement(
        'label',
        { className: 'input-form__title__label' },
        label,
        ' ',
        info
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-form__content' },
      isFrozen ? isHTML ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: value } }) : _react2.default.createElement(
        'p',
        { className: 'input-form__content__text',
          itemProp: valueItemProp
        },
        value
      ) : _react2.default.createElement(_reactDebounceInput2.default, {
        className: 'input-form__content__input',
        debounceTimeout: 500,
        name: name,
        type: 'text',
        onChange: function onChange(event) {
          return handleChangeValue(event);
        },
        required: true,
        value: value
      })
    )
  );
};

exports.default = (0, _transactionsCmsState.InputForm)(InputForm);