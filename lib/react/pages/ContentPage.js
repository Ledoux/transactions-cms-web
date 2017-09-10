'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _Check = require('../components/Check');

var _Check2 = _interopRequireDefault(_Check);

var _Explore = require('../components/Explore');

var _Explore2 = _interopRequireDefault(_Explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentPage = function ContentPage(_ref) {
  var api = _ref.api,
      collectionName = _ref.collectionName,
      entityName = _ref.entityName,
      entityOrCollectionName = _ref.entityOrCollectionName,
      isEdit = _ref.isEdit,
      isEntityName = _ref.isEntityName,
      modeName = _ref.modeName,
      slug = _ref.slug;

  var label = 'content-' + collectionName;
  var options = [{ collectionName: collectionName,
    entityName: entityName,
    label: label
  }];
  var TaskComponent = isEntityName ? _Check2.default : _Explore2.default;
  return _react2.default.createElement(
    'main',
    { className: 'main page content-page' },
    entityName && _react2.default.createElement(TaskComponent, {
      api: api,
      collectionName: collectionName,
      entityName: entityName,
      isEdit: isEdit,
      label: label,
      modeName: modeName,
      options: options,
      slug: slug
    })
  );
};

exports.default = (0, _transactionsCmsState.ContentPage)(ContentPage);