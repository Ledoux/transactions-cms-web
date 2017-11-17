'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemDecorator = function ItemDecorator(props) {
  var BottomInteractionComponent = props.BottomInteractionComponent,
      className = props.className,
      content = props.content,
      ContentComponent = props.ContentComponent,
      entityName = props.entityName,
      isLast = props.isLast,
      isShrinked = props.isShrinked,
      isSmall = props.isSmall,
      LeftInteractionComponent = props.LeftInteractionComponent,
      RightInteractionComponent = props.RightInteractionComponent,
      text = props.text;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className || 'item-decorator item-decorator--' + entityName, {
        'item-decorator--shrinked': isShrinked,
        'item-decorator--shrinked--last': isShrinked && isLast,
        'item-decorator--small': isSmall }) },
    LeftInteractionComponent && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('item-decorator__left-interaction col', {
          'item-decorator__left-interaction--shrinked': isShrinked
        }) },
      _react2.default.createElement(LeftInteractionComponent, content)
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('item-decorator__content', {
          'col': LeftInteractionComponent,
          'item-decorator__content--text flex items-center': text }) },
      ContentComponent && _react2.default.createElement(ContentComponent, content),
      text && _react2.default.createElement(
        'p',
        { className: 'item-decorator__content__text' },
        text
      )
    ),
    RightInteractionComponent && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('item-decorator__right-interaction ', {
          'item-decorator__right-interaction--shrinked': isShrinked
        }) },
      _react2.default.createElement(RightInteractionComponent, content)
    ),
    BottomInteractionComponent && _react2.default.createElement(
      'div',
      { className: 'item-decorator__bottom-interaction' },
      _react2.default.createElement(BottomInteractionComponent, content)
    )
  );
};

exports.default = (0, _transactionsCmsState.ItemDecorator)(ItemDecorator);