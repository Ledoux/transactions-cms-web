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
      contents = _ref.contents,
      controlIndex = _ref.controlIndex,
      className = _ref.className,
      divId = _ref.divId,
      explore = _ref.explore,
      index = _ref.index,
      isFrozen = _ref.isFrozen,
      ContentComponent = _ref.ContentComponent,
      tag = _ref.tag;

  var contentElements = void 0;
  if (isFrozen) {
    contentElements = content ? [_react2.default.createElement(ContentComponent, _extends({ key: 0 }, content))] : contents && contents.map(function (content, index) {
      return _react2.default.createElement(ContentComponent, _extends({ key: index }, content));
    });
  } else {
    contentElements = content ? [_react2.default.createElement(
      'div',
      { className: 'join-form__content',
        key: 0,
        onClick: function onClick() {
          return activeClickListener(0);
        }
      },
      _react2.default.createElement(ContentComponent, content)
    )] : contents && contents.map(function (content, index) {
      return _react2.default.createElement(
        'div',
        { className: 'join-form__content',
          key: index,
          onClick: function onClick() {
            return activeClickListener(index);
          }
        },
        _react2.default.createElement(ContentComponent, content)
      );
    });
    if (contentElements) {
      contentElements.push(_react2.default.createElement(
        _reactPortal.Portal,
        { node: document && document.getElementById(divId), key: 'portal' },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('join-form__replace', {
              'join-form__replace--hidden': controlIndex === null
            }) },
          _react2.default.createElement(_transactionsCmsWeb.ExploreTask, explore)
        )
      ));
    }
  }
  return _react2.default.createElement(
    'div',
    { className: className || 'join-form', id: divId },
    contentElements
  );
};

exports.default = (0, _transactionsCmsState.JoinForm)(JoinForm);