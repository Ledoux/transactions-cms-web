'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsReduxNormalizer = require('transactions-redux-normalizer');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

    _this.state = { entityName: null };
    _this.handleSetEntityName = _this._handleSetEntityName.bind(_this);
    return _this;
  }

  _createClass(List, [{
    key: '_handleSetEntityName',
    value: function _handleSetEntityName(props) {
      this.setState({ entityName: (0, _pluralize2.default)(props.collectionName, 1) });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handleSetEntityName(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.collectionName !== this.props.collectionName) {
        this.handleSetEntityName(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          BottomInteractionComponent = _props.BottomInteractionComponent,
          collectionName = _props.collectionName,
          ContentComponent = _props.ContentComponent,
          entities = _props.entities,
          exploreState = _props.exploreState,
          extraProps = _props.extraProps,
          inputTemplate = _props.inputTemplate,
          interactionExtraProps = _props.interactionExtraProps,
          isSearch = _props.isSearch,
          isShrinked = _props.isShrinked,
          isSmall = _props.isSmall,
          label = _props.label,
          LeftInteractionComponent = _props.LeftInteractionComponent,
          maxDisplayCount = _props.maxDisplayCount,
          onExploreChange = _props.onExploreChange,
          placeholder = _props.placeholder,
          RightInteractionComponent = _props.RightInteractionComponent;
      var entityName = this.state.entityName;

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
      var transactionsProps = (0, _transactionsInterfaceState.getTransactionsProps)(this.props);
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('list', {
            'list--shrinked': isShrinked
          }) },
        ContentComponent && entities && entities.slice(0, displayedLength).map(function (entity, index) {
          return _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('list__child', {
                'list__child--shrinked': isShrinked,
                'list__child--small': isSmall
              }),
              key: index },
            _react2.default.createElement(_Item2.default, _extends({
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
            }, transactionsProps))
          );
        }),
        warningMessage && _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('list__child', {
              'list__child--shrinked': isShrinked,
              'list__child--shrinked--last': true,
              'list__child--small': isSmall
            }),
            key: 'more-item' },
          _react2.default.createElement(_Item2.default, {
            collectionName: collectionName,
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
          {
            className: (0, _classnames2.default)('list__child', {
              'list__child--shrinked': isShrinked,
              'list__child--shrinked--last': true,
              'list__child--small': isSmall
            }),
            key: 'more-item' },
          _react2.default.createElement(_Item2.default, {
            collectionName: collectionName,
            exploreState: exploreState,
            isLast: true,
            isShrinked: isShrinked,
            isSmall: true,
            onExploreChange: onExploreChange,
            text: 'Precise your search if you want to find other matching ' + collectionName
          })
        )
      );
    }
  }]);

  return List;
}(_react.Component);

List.defaultProps = {
  ItemComponentsByCollectionName: {},
  label: 'default',
  maxDisplayCount: 10000

  // we get the entities from the pipelined entities
  // stored in the location reducer
};function mapStateToProps(state, _ref) {
  var collectionName = _ref.collectionName,
      getFilteredElements = _ref.getFilteredElements,
      label = _ref.label;
  var itemViewer = state.itemViewer,
      _state$reselector$WIT = state.reselector.WITH_SIGN_SEARCH,
      query = _state$reselector$WIT.query,
      sign = _state$reselector$WIT.sign;
  // no need to go further if no collectionName

  if (!collectionName) {
    return {};
  }
  var ContentComponent = itemViewer[collectionName];
  // let s see if we need to restrict because of a search filter
  var entities = getFilteredElements(state, query && sign === label ? 'WITH_SIGN_SEARCH' : 'ALL', collectionName, { isRecursive: true });
  // return
  return { ContentComponent: ContentComponent,
    entities: entities
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(List);