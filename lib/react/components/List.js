'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _ItemContainer = require('../containers/ItemContainer');

var _ItemContainer2 = _interopRequireDefault(_ItemContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var bottomInteractionName = _ref.bottomInteractionName,
      collectionName = _ref.collectionName,
      entities = _ref.entities,
      entityName = _ref.entityName,
      exploreState = _ref.exploreState,
      extraProps = _ref.extraProps,
      inputTemplate = _ref.inputTemplate,
      interactionExtraProps = _ref.interactionExtraProps,
      isSearch = _ref.isSearch,
      isShrinked = _ref.isShrinked,
      isSmall = _ref.isSmall,
      label = _ref.label,
      leftInteractionName = _ref.leftInteractionName,
      maxDisplayCount = _ref.maxDisplayCount,
      onExploreChange = _ref.onExploreChange,
      placeholder = _ref.placeholder,
      rightInteractionName = _ref.rightInteractionName;

  var warningMessage = void 0;
  var entitiesLength = entities && entities.length;
  if (!collectionName || entitiesLength === 0) {
    warningMessage = 'No ' + collectionName + ' found';
  }
  var displayedLength = Math.min(maxDisplayCount, entitiesLength);
  var isNotTotal = maxDisplayCount && entitiesLength > maxDisplayCount;
  var isMore = maxDisplayCount && isNotTotal;

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
        _react2.default.createElement(_ItemContainer2.default, { collectionName: collectionName,
          contentName: collectionName,
          bottomInteractionName: bottomInteractionName,
          entity: entity,
          entityName: entityName,
          extraProps: extraProps,
          exploreState: exploreState,
          interactionExtraProps: interactionExtraProps,
          isLast: index === displayedLength - 1,
          isShrinked: isShrinked,
          isSmall: isSmall,
          leftInteractionName: leftInteractionName,
          onExploreChange: onExploreChange,
          rightInteractionName: rightInteractionName })
      );
    }),
    warningMessage && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('list__child', {
          'list__child--shrinked': isShrinked,
          'list__child--shrinked--last': true,
          'list__child--small': isSmall
        }),
        key: 'more-item' },
      _react2.default.createElement(_ItemContainer2.default, { collectionName: collectionName,
        exploreState: exploreState,
        isLast: true,
        isShrinked: isShrinked,
        isSmall: true,
        onExploreChange: onExploreChange,
        text: warningMessage })
    ),
    isMore && isSearch && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('list__child', {
          'list__child--shrinked': isShrinked,
          'list__child--shrinked--last': true,
          'list__child--small': isSmall
        }),
        key: 'more-item' },
      _react2.default.createElement(_ItemContainer2.default, { collectionName: collectionName,
        exploreState: exploreState,
        isLast: true,
        isShrinked: isShrinked,
        isSmall: true,
        onExploreChange: onExploreChange,
        text: 'Precise your search if you want to find other matching ' + collectionName })
    )
  );
};

exports.default = (0, _transactionsCmsState.List)(List);