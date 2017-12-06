'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDebounceInput = require('react-debounce-input');

var _reactDebounceInput2 = _interopRequireDefault(_reactDebounceInput);

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputForm = function InputForm(_ref) {
  var className = _ref.className,
      initialValue = _ref.initialValue,
      isFrozen = _ref.isFrozen,
      isHTML = _ref.isHTML,
      itemProp = _ref.itemProp,
      itemScope = _ref.itemScope,
      itemType = _ref.itemType,
      label = _ref.label,
      name = _ref.name,
      onChangeValue = _ref.onChangeValue,
      state = _ref.state,
      slug = _ref.slug,
      tag = _ref.tag,
      value = _ref.value,
      valueItemProp = _ref.valueItemProp;

  if (typeof value !== 'string') {
    value = initialValue || '';
  }
  return _react2.default.createElement(
    'div',
    { className: className || 'input-form',
      id: tag,
      itemProp: itemProp,
      itemScope: itemScope,
      itemType: itemType },
    !isFrozen && _react2.default.createElement(
      'div',
      { className: 'input-form__title' },
      _react2.default.createElement(
        'label',
        { className: 'input-form__title__label' },
        label
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-form__content' },
      isFrozen ? isHTML ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: value } }) : _react2.default.createElement(
        'div',
        { className: 'input-form__content__text',
          itemProp: valueItemProp },
        value
      ) : _react2.default.createElement(_reactDebounceInput2.default, { className: 'input-form__content__input',
        debounceTimeout: 500,
        name: name,
        type: 'text',
        onChange: onChangeValue,
        required: true,
        value: value })
    )
  );
};

exports.default = (0, _transactionsCmsState.InputForm)(InputForm);