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

var TogglesForm = function TogglesForm(_ref) {
  var isFrozen = _ref.isFrozen,
      entities = _ref.entities,
      colIndexes = _ref.colIndexes,
      onToggleClick = _ref.onToggleClick,
      selectedIds = _ref.selectedIds,
      title = _ref.title;

  return _react2.default.createElement(
    'div',
    { className: 'toggles-form' },
    title && _react2.default.createElement(
      'div',
      { className: 'toggles-form__title' },
      title
    ),
    entities && colIndexes.map(function (colIndex) {
      return _react2.default.createElement(
        'div',
        { className: 'toggles-form__labels md-col md-col-' + colIndexes.length,
          key: colIndex },
        entities.slice(colIndex * (entities.length / colIndexes.length), (colIndex + 1) * (entities.length / colIndexes.length)).map(function (_ref2, index) {
          var id = _ref2.id,
              label = _ref2.label;

          var isSelected = selectedIds && selectedIds.includes(id);
          return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('toggles-form__labels__item', {
                'toggles-form__labels__item--selected': isSelected
              }),
              key: index },
            _react2.default.createElement('input', { className: (0, _classnames2.default)('toggles-form__labels__item__input', {
                'toggles-form__labels__item__input--disabled': isFrozen
              }),
              defaultChecked: isSelected,
              disabled: isFrozen,
              onClick: function onClick() {
                return onToggleClick(id);
              },
              readOnly: true,
              type: 'checkbox' }),
            label
          );
        })
      );
    })
  );
};

exports.default = (0, _transactionsCmsState.TogglesForm)(TogglesForm);