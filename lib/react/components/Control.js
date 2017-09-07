'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _EditButton = require('./EditButton');

var _EditButton2 = _interopRequireDefault(_EditButton);

var _SubmitButton = require('./SubmitButton');

var _SubmitButton2 = _interopRequireDefault(_SubmitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(props) {
  var isEdit = props.isEdit,
      isNew = props.isNew;

  return _react2.default.createElement(
    'div',
    { className: 'control flex flex-auto' },
    isEdit || isNew ? _react2.default.createElement(_SubmitButton2.default, null) : _react2.default.createElement(_EditButton2.default, null)
  );
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$submit = _ref.submit,
      isEdit = _ref$submit.isEdit,
      isNew = _ref$submit.isNew;

  return { isEdit: isEdit,
    isNew: isNew
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Control);