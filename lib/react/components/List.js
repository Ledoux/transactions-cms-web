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

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var BottomInteractionComponent = _ref.BottomInteractionComponent,
      collectionName = _ref.collectionName,
      ContentComponent = _ref.ContentComponent,
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
      LeftInteractionComponent = _ref.LeftInteractionComponent,
      maxDisplayCount = _ref.maxDisplayCount,
      onExploreChange = _ref.onExploreChange,
      placeholder = _ref.placeholder,
      RightInteractionComponent = _ref.RightInteractionComponent;

  var warningMessage = void 0;
  var entitiesLength = entities && entities.length;
  if (collectionName && entitiesLength > 0) {
    if (typeof ContentComponent === 'undefined') {
      warningMessage = 'Warning, there is no a defined Item Component for ' + collectionName;
    }
  } else {
    warningMessage = 'No ' + collectionName + ' found';
  }
  var displayedLength = Math.min(maxDisplayCount, entitiesLength);
  var isNotTotal = maxDisplayCount && entitiesLength > maxDisplayCount;
  var isMore = maxDisplayCount && isNotTotal;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('list', {
        'list--shrinked': isShrinked
      }) },
    ContentComponent && entities && entities.slice(0, displayedLength).map(function (entity, index) {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('list__child', {
            'list__child--shrinked': isShrinked,
            'list__child--small': isSmall
          }),
          key: index },
        _react2.default.createElement(_Item2.default, { collectionName: collectionName,
          ContentComponent: ContentComponent,
          BottomInteractionComponent: BottomInteractionComponent,
          entity: entity,
          entityName: entityName,
          extraProps: extraProps,
          exploreState: exploreState,
          interactionExtraProps: interactionExtraProps,
          isLast: index === displayedLength - 1,
          isShrinked: isShrinked,
          isSmall: isSmall,
          LeftInteractionComponent: LeftInteractionComponent,
          onExploreChange: onExploreChange,
          RightInteractionComponent: RightInteractionComponent
        })
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
      _react2.default.createElement(_Item2.default, { collectionName: collectionName,
        exploreState: exploreState,
        isLast: true,
        isShrinked: isShrinked,
        isSmall: true,
        onExploreChange: onExploreChange,
        text: warningMessage
      })
    ),
    ContentComponent && isMore && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('list__child', {
          'list__child--shrinked': isShrinked,
          'list__child--shrinked--last': true,
          'list__child--small': isSmall
        }),
        key: 'more-item' },
      _react2.default.createElement(_Item2.default, { collectionName: collectionName,
        exploreState: exploreState,
        isLast: true,
        isShrinked: isShrinked,
        isSmall: true,
        onExploreChange: onExploreChange,
        text: 'Precise your search if you want to find other matching ' + collectionName
      })
    )
  );
};

exports.default = (0, _transactionsCmsState.List)(List);