'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadiosForm = function RadiosForm(props) {
  var entities = props.entities,
      isConclusion = props.isConclusion,
      isFrozen = props.isFrozen,
      isRequired = props.isRequired,
      maxValue = props.maxValue,
      onRadioClick = props.onRadioClick,
      _onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      selectedId = props.selectedId,
      title = props.title;

  return _react2.default.createElement(
    'div',
    { className: 'radios-form',
      onMouseLeave: onMouseLeave },
    _react2.default.createElement(
      'div',
      { className: 'radios-form__title mb2' },
      _react2.default.createElement(
        'div',
        { className: 'col mr1' },
        title
      ),
      isRequired && _react2.default.createElement(
        'div',
        { className: 'radios-form__title__required col' },
        '(required)'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'radios-form__values' },
      entities && entities.map(function (_ref, index) {
        var id = _ref.id,
            info = _ref.info,
            label = _ref.label,
            value = _ref.value;

        var isMax = value === maxValue;
        var isSelected = id === selectedId;
        var parentId = 'radios-form__values__item--' + index;
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('radios-form__values__item', {
              'radios-form__values__item--selected': isSelected
            }),
            id: parentId,
            key: index,
            onMouseEnter: function onMouseEnter() {
              return _onMouseEnter({ info: info,
                parentId: parentId });
            } },
          _react2.default.createElement('input', { className: (0, _classnames2.default)('radios-form__values__item__input', {
              'radios-form__values__item__input--disabled': isFrozen
            }),
            checked: isSelected,
            disabled: isFrozen,
            onClick: function onClick() {
              return onRadioClick(id);
            },
            readOnly: true,
            type: 'radio' }),
          label,
          isMax && _react2.default.createElement(
            'span',
            { itemProp: 'bestRating', hidden: true },
            value
          ),
          isSelected && _react2.default.createElement(
            'span',
            { itemProp: 'ratingValue', hidden: true },
            value
          )
        );
      })
    )
  );
};

exports.default = (0, _transactionsCmsState.RadiosForm)(RadiosForm);