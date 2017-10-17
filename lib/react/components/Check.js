'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsCmsState = require('transactions-cms-state');

var _Card = require('../containers/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is where one entity edition/post can be done
var Check = function Check(_ref) {
  var api = _ref.api,
      entity = _ref.entity,
      entityName = _ref.entityName,
      isNew = _ref.isNew,
      mergeEntity = _ref.mergeEntity,
      slug = _ref.slug;

  var warningMessage = void 0;
  if (!isNew && !entity) {
    warningMessage = 'Warning, we did not find a good entity with the slug ' + slug;
  }
  return _react2.default.createElement(
    'div',
    { className: 'check' },
    _react2.default.createElement(
      'div',
      { className: 'check__content' },
      !warningMessage && _react2.default.createElement(_Card2.default, { api: api,
        contentName: entityName,
        entity: mergeEntity || entity,
        isChecked: true,
        isTitle: true }),
      warningMessage && _react2.default.createElement(_transactionsInterfaceWeb.Warning, { text: warningMessage })
    )
  );
};

exports.default = (0, _transactionsCmsState.Check)(Check);