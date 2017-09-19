'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(props) {
  var BottomInteractionComponent = props.BottomInteractionComponent,
      className = props.className,
      collectionName = props.collectionName,
      ContentComponent = props.ContentComponent,
      entity = props.entity,
      entityName = props.entityName,
      exploreState = props.exploreState,
      extraProps = props.extraProps,
      interactionExtraProps = props.interactionExtraProps,
      isLast = props.isLast,
      isShrinked = props.isShrinked,
      isSmall = props.isSmall,
      LeftInteractionComponent = props.LeftInteractionComponent,
      onExploreChange = props.onExploreChange,
      RightInteractionComponent = props.RightInteractionComponent,
      text = props.text;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className || 'item item--' + entityName, {
        'item--shrinked': isShrinked,
        'item--shrinked--last': isShrinked && isLast,
        'item--small': isSmall
      }) },
    LeftInteractionComponent && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('item__left-interaction col', {
          'item__left-interaction--shrinked': isShrinked
        }) },
      _react2.default.createElement(LeftInteractionComponent, _extends({ exploreState: exploreState,
        onExploreChange: onExploreChange
      }, entity, interactionExtraProps))
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('item__content', {
          'col': LeftInteractionComponent,
          'item__content--text flex items-center': text }) },
      ContentComponent && _react2.default.createElement(ContentComponent, _extends({}, entity, extraProps)),
      text && _react2.default.createElement(
        'p',
        { className: 'item__content__text' },
        text
      )
    ),
    RightInteractionComponent && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('item__right-interaction ', {
          'item__right-interaction--shrinked': isShrinked
        }) },
      _react2.default.createElement(RightInteractionComponent, _extends({ exploreState: exploreState,
        onExploreChange: onExploreChange
      }, entity, interactionExtraProps))
    ),
    BottomInteractionComponent && _react2.default.createElement(
      'div',
      { className: 'item__bottom-interaction' },
      _react2.default.createElement(BottomInteractionComponent, _extends({ exploreState: exploreState,
        onExploreChange: onExploreChange
      }, entity, interactionExtraProps))
    )
  );
};

exports.default = Item;