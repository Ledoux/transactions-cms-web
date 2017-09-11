'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsCmsState = require('transactions-cms-state');

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is where one entity edition/post can be done
var Check = function Check(_ref) {
  var api = _ref.api,
      collectionName = _ref.collectionName,
      ContentComponent = _ref.ContentComponent,
      entity = _ref.entity,
      entityName = _ref.entityName,
      isNew = _ref.isNew,
      isNotPipelinedYet = _ref.isNotPipelinedYet,
      pipelineEntity = _ref.pipelineEntity,
      slug = _ref.slug;

  var warningMessage = void 0;
  if (!isNew && !isNotPipelinedYet && !entity) {
    warningMessage = 'Warning, we did not find a good entity with the slug ' + slug;
  }
  if (typeof ContentComponent === 'undefined') {
    warningMessage = 'Warning, we did not define yet a Card for the ' + entityName + ' entity';
  }
  return _react2.default.createElement(
    'div',
    { className: 'check' },
    _react2.default.createElement(
      'div',
      { className: 'check__content' },
      !warningMessage && ContentComponent && _react2.default.createElement(_Card2.default, {
        api: api,
        collectionName: collectionName,
        entity: entity,
        entityName: entityName,
        ChildComponent: ContentComponent,
        isNew: isNew,
        isTitle: true
      }),
      warningMessage && _react2.default.createElement(_transactionsInterfaceWeb.Warning, { text: warningMessage })
    )
  );
};

exports.default = (0, _transactionsCmsState.Check)(Check);