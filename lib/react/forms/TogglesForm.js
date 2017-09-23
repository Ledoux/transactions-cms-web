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

var TogglesForm = function TogglesForm(props) {
  var isFrozen = props.isFrozen,
      entities = props.entities,
      colIndexes = props.colIndexes,
      ids = props.ids,
      onToggleClick = props.onToggleClick,
      title = props.title;

  return _react2.default.createElement(
    'div',
    { className: 'toggles-form' },
    title && _react2.default.createElement(
      'p',
      { className: 'toggles-form__title' },
      title
    ),
    entities && colIndexes.map(function (colIndex) {
      return _react2.default.createElement(
        'div',
        { className: 'toggles-form__labels md-col md-col-' + colIndexes.length,
          key: colIndex },
        entities.slice(colIndex * (entities.length / colIndexes.length), (colIndex + 1) * (entities.length / colIndexes.length)).map(function (_ref, index) {
          var id = _ref.id,
              label = _ref.label;

          var isSelected = ids && ids.includes(id);
          return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('toggles-form__labels__item', {
                'toggles-form__labels__item--selected': isSelected
              }),
              key: index },
            _react2.default.createElement('input', { className: (0, _classnames2.default)('toggles-form__labels__item__input', {
                'toggles-form__labels__item__input--disabled': isFrozen
              }),
              checked: isSelected,
              disabled: isFrozen,
              onClick: function onClick() {
                return onToggleClick(id);
              },
              readOnly: true,
              type: 'checkbox'
            }),
            label
          );
        })
      );
    })
  );
};

exports.default = (0, _transactionsCmsState.TogglesForm)(TogglesForm);