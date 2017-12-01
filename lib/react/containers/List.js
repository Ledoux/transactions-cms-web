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

var List = function List(_ref) {
  var content = _ref.content,
      ContentComponent = _ref.ContentComponent,
      displayedLength = _ref.displayedLength,
      entities = _ref.entities,
      entityName = _ref.entityName,
      extraClass = _ref.extraClass,
      getClass = _ref.getClass,
      getOn = _ref.getOn,
      isNotTotal = _ref.isNotTotal,
      isShrinked = _ref.isShrinked,
      isSmall = _ref.isSmall,
      maxDisplayCount = _ref.maxDisplayCount;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames3.default)('list list--' + entityName, _defineProperty({
        'list--shrinked': isShrinked
      }, extraClass, extraClass)) },
    entities && entities.slice(0, displayedLength).map(function (entity, index) {
      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames3.default)('list__child', {
            'list__child--shrinked': isShrinked,
            'list__child--small': isSmall
          }, getClass && getClass(entity, index)),
          key: index
        }, getOn && getOn(entity, index)),
        _react2.default.createElement(ContentComponent, _extends({}, content, entity, {
          index: index,
          isLast: index === displayedLength - 1 }))
      );
    })
  );
};

exports.default = (0, _transactionsCmsState.List)(List);