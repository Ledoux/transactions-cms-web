'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsCmsWeb = require('transactions-cms-web');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _ControlBar = require('../components/ControlBar');

var _ControlBar2 = _interopRequireDefault(_ControlBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoinForm = function JoinForm(_ref) {
  var activeClickListener = _ref.activeClickListener,
      collectionName = _ref.collectionName,
      content = _ref.content,
      ContentComponent = _ref.ContentComponent,
      contents = _ref.contents,
      controlIndex = _ref.controlIndex,
      className = _ref.className,
      elementId = _ref.elementId,
      explore = _ref.explore,
      index = _ref.index,
      isFrozen = _ref.isFrozen,
      onAddClick = _ref.onAddClick,
      onDeleteClick = _ref.onDeleteClick,
      onSetClick = _ref.onSetClick,
      shortJoinKey = _ref.shortJoinKey,
      tag = _ref.tag;

  var contentElements = [];
  if (isFrozen) {
    if (content) {
      contentElements.push(_react2.default.createElement(ContentComponent, _extends({ key: 0 }, content)));
    } else if (contents) {
      contents.forEach(function (content, index) {
        return contentElements.push(_react2.default.createElement(ContentComponent, _extends({ key: index }, content)));
      });
    }
  } else if (content) {
    contentElements.push(_react2.default.createElement(
      'div',
      { className: 'join-form__content',
        key: 0,
        onClick: function onClick() {
          return activeClickListener(0);
        }
      },
      _react2.default.createElement(ContentComponent, content)
    ));
  } else if (contents) {
    contents.forEach(function (content, index) {
      contentElements.push(_react2.default.createElement(
        'div',
        { className: 'join-form__content',
          key: index,
          onClick: function onClick() {
            return activeClickListener(index);
          }
        },
        _react2.default.createElement(ContentComponent, content)
      ));
    });
    contentElements.push(_react2.default.createElement(
      _transactionsInterfaceWeb.Button,
      { key: 'add', onClick: function onClick() {
          return onAddClick(contents.length);
        } },
      'Add ',
      shortJoinKey
    ));
  } else {
    contentElements.push(_react2.default.createElement(
      _transactionsInterfaceWeb.Button,
      { key: 'set', onClick: onSetClick },
      shortJoinKey
    ));
  }
  contentElements.push(
  //<Portal node={document && document.getElementById(elementId)} key='portal'>
  _react2.default.createElement(
    'div',
    { key: 'explore', className: (0, _classnames2.default)('join-form__replace', {
        'join-form__replace--hidden': controlIndex === null
      }) },
    _react2.default.createElement(
      _transactionsInterfaceWeb.Button,
      { onClick: onDeleteClick },
      'Delete ',
      shortJoinKey
    ),
    _react2.default.createElement(_transactionsCmsWeb.ExploreTask, explore)
  )
  //</Portal>
  );
  return _react2.default.createElement(
    'div',
    { className: className || 'join-form', id: elementId },
    contentElements
  );
};

exports.default = (0, _transactionsCmsState.JoinForm)(JoinForm);