'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceState = require('transactions-interface-state');

var _EditButton = require('./EditButton');

var _EditButton2 = _interopRequireDefault(_EditButton);

var _SubmitButton = require('./SubmitButton');

var _SubmitButton2 = _interopRequireDefault(_SubmitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(props) {
  var getIsEmptyForm = props.getIsEmptyForm,
      history = props.history,
      isEdit = props.isEdit,
      isNew = props.isNew;

  var transactionsProps = (0, _transactionsInterfaceState.getTransactionsProps)(props);
  return _react2.default.createElement(
    'div',
    { className: 'control flex flex-auto' },
    isEdit || isNew ? _react2.default.createElement(_SubmitButton2.default, _extends({
      getIsEmptyForm: getIsEmptyForm,
      history: history,
      isEdit: isEdit,
      isNew: isNew
    }, transactionsProps)) : _react2.default.createElement(_EditButton2.default, { history: history })
  );
};

exports.default = Control;