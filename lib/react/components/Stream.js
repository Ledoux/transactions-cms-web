'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _CardContainer = require('../containers/CardContainer');

var _CardContainer2 = _interopRequireDefault(_CardContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stream = function Stream(_ref) {
  var className = _ref.className,
      contentName = _ref.contentName,
      entities = _ref.entities,
      extraProps = _ref.extraProps,
      isBorder = _ref.isBorder,
      selectedIndex = _ref.selectedIndex;

  return _react2.default.createElement(
    'div',
    { className: className || 'stream' },
    entities && entities.map(function (entity, index) {
      return _react2.default.createElement(
        'div',
        { key: index, className: (0, _classnames2.default)('stream__element flex items-center justify-center', {
            'stream__element--selected': index === selectedIndex
          }) },
        _react2.default.createElement(_CardContainer2.default, { contentName: contentName,
          entity: entity,
          extraProps: Object.assign({ isHalfSize: true }, extraProps),
          isBorder: true })
      );
    })
  );
};

exports.default = (0, _transactionsCmsState.Stream)(Stream);