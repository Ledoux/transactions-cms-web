'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _ItemDecorator = require('../decorators/ItemDecorator');

var _ItemDecorator2 = _interopRequireDefault(_ItemDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var collectionName = _ref.collectionName,
      displayedLength = _ref.displayedLength,
      itemDecoratorProps = _ref.itemDecoratorProps,
      entities = _ref.entities,
      entityName = _ref.entityName,
      isMore = _ref.isMore,
      isNotTotal = _ref.isNotTotal,
      isSearch = _ref.isSearch,
      isShrinked = _ref.isShrinked,
      isSmall = _ref.isSmall,
      maxDisplayCount = _ref.maxDisplayCount;

  console.log('entities', entities, itemDecoratorProps);
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('list', {
        'list--shrinked': isShrinked }) },
    entities && entities.slice(0, displayedLength).map(function (entity, index) {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('list__child', {
            'list__child--shrinked': isShrinked,
            'list__child--small': isSmall
          }),
          key: index },
        _react2.default.createElement(_ItemDecorator2.default, _extends({ entity: entity
        }, itemDecoratorProps, {
          isLast: index === displayedLength - 1 }))
      );
    }),
    isMore && isSearch && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('list__child', {
          'list__child--shrinked': isShrinked,
          'list__child--shrinked--last': true,
          'list__child--small': isSmall
        }),
        key: 'more-item' },
      _react2.default.createElement(_ItemDecorator2.default, _extends({}, itemDecoratorProps, {
        isLast: true,
        isSmall: true,
        text: 'Precise your search if you want to find other matching ' + collectionName }))
    )
  );
};

exports.default = (0, _transactionsCmsState.List)(List);