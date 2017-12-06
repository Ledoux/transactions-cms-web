'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stream = function Stream(_ref) {
  var className = _ref.className,
      collectionName = _ref.collectionName,
      content = _ref.content,
      ContentComponent = _ref.ContentComponent,
      entities = _ref.entities,
      extraClass = _ref.extraClass,
      selectedIndex = _ref.selectedIndex;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames3.default)('stream stream--' + collectionName, _defineProperty({}, extraClass, extraClass)) },
    entities && entities.map(function (entity, index) {
      return _react2.default.createElement(
        'div',
        { key: index, className: (0, _classnames3.default)('stream__element flex items-center justify-center', {
            'stream__element--selected': index === selectedIndex
          }) },
        _react2.default.createElement(ContentComponent, _extends({}, entity, content, { index: index }))
      );
    })
  );
};

exports.default = (0, _transactionsCmsState.Stream)(Stream);