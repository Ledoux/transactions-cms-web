'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsReduxRequest = require('transactions-redux-request');

var _transactionsReduxReselector = require('transactions-redux-reselector');

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// this is where one entity edition/post can be done
var Check = function (_Component) {
  _inherits(Check, _Component);

  function Check() {
    _classCallCheck(this, Check);

    var _this = _possibleConstructorReturn(this, (Check.__proto__ || Object.getPrototypeOf(Check)).call(this));

    _this.state = { hasRequestedOnce: false };
    _this.handleNavigation = _this._handleNavigation.bind(_this);
    return _this;
  }

  _createClass(Check, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleNavigation();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleNavigation();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          isEdit = _props.isEdit,
          setSubmitConfig = _props.setSubmitConfig,
          slug = _props.slug;

      setSubmitConfig({ isEdit: isEdit,
        isNew: slug === 'new'
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.mergeReselector({
        WITH_SLUG: {
          slug: null
        }
      });
    }
  }, {
    key: '_handleNavigation',
    value: function _handleNavigation() {
      var _props2 = this.props,
          assignPipeline = _props2.assignPipeline,
          collectionName = _props2.collectionName,
          dispatch = _props2.dispatch,
          entityName = _props2.entityName,
          entities = _props2.entities,
          entity = _props2.entity,
          filterSlug = _props2.filterSlug,
          isEdit = _props2.isEdit,
          isNew = _props2.isNew,
          isModalActive = _props2.isModalActive,
          mergeReselector = _props2.mergeReselector,
          newEntity = _props2.newEntity,
          pipelineEntitiesLength = _props2.pipelineEntitiesLength,
          pipelineEntity = _props2.pipelineEntity,
          push = _props2.push,
          request = _props2.request,
          slug = _props2.slug;
      var hasRequestedOnce = this.state.hasRequestedOnce;

      if (collectionName) {
        if (!slug) {
          // check first that we have data
          if (!pipelineEntitiesLength && !hasRequestedOnce) {
            this.setState({ hasRequestedOnce: true });
            request('GET', [{ collectionName: collectionName }], collectionName + '-check');
            return;
          }
          var automaticSlug = (0, _transactionsInterfaceState.getAutomaticSlug)(entities);
          if (automaticSlug) {
            push('/content/check/' + entityName + '/' + automaticSlug);
          }
        } else {
          // it is a content slug but we don't have yet the entity
          // because the filter slug is not set yet
          if (!isNew) {
            if (filterSlug !== slug) {
              mergeReselector({
                WITH_SLUG: {
                  slug: slug
                }
              });
              return;
            }
          }
          // now make sure that we will have the entity (if it exists)
          if (!entity) {
            if (!hasRequestedOnce) {
              // either this is not the new mode,
              // so we have actually the slug and we can peacefully
              // get the matching already stored entity
              // Or actually we don't have the slug, buu actually
              // this new entity has some joined entities needed
              // and that are sotred in the new form object
              if (!isNew || newEntity) {
                this.setState({ hasRequestedOnce: true });
                request('GET', [{ collectionName: collectionName, query: { slug: slug } }], collectionName);
              }
            }
          } else if (!pipelineEntity) {
            assignPipeline(_defineProperty({}, collectionName + 'ById', _defineProperty({}, entity.id, entity)));
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          api = _props3.api,
          ContentComponent = _props3.ContentComponent,
          entity = _props3.entity,
          entityName = _props3.entityName,
          isNew = _props3.isNew,
          isNotPipelinedYet = _props3.isNotPipelinedYet,
          pipelineEntity = _props3.pipelineEntity,
          slug = _props3.slug;

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
            ChildComponent: ContentComponent,
            entity: entity,
            isTitle: true
          }),
          warningMessage && _react2.default.createElement(_transactionsInterfaceWeb.Warning, { text: warningMessage })
        )
      );
    }
  }]);

  return Check;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var cardViewer = state.cardViewer,
      isActive = state.modal.isActive,
      _state$reselector = state.reselector,
      getFilteredElements = _state$reselector.getFilteredElements,
      WITH_SLUG = _state$reselector.WITH_SLUG,
      _state$submit = state.submit,
      collectionName = _state$submit.collectionName,
      entityName = _state$submit.entityName,
      isNew = _state$submit.isNew;

  var ContentComponent = entityName && cardViewer[entityName];
  var slugEntities = collectionName && getFilteredElements(state, 'WITH_SLUG', collectionName);
  var entity = collectionName && slugEntities && slugEntities.length === 1 && slugEntities[0];
  var pipelineEntity = entity && (0, _transactionsCmsState.getPipelineEntity)(state, collectionName, entity.id);
  var newEntity = collectionName && isNew && (0, _transactionsCmsState.getFormEntity)(state, collectionName, '_NEW_');
  var pipelineEntities = (0, _transactionsCmsState.getPipelineEntities)(state, collectionName);
  return { collectionName: collectionName,
    ContentComponent: ContentComponent,
    entity: entity,
    entityName: entityName,
    filterSlug: WITH_SLUG.slug,
    isModalActive: isActive,
    isNew: isNew,
    newEntity: newEntity,
    pipelineEntitiesLength: pipelineEntities.length,
    pipelineEntity: pipelineEntity
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { assignPipeline: _transactionsCmsState.assignPipeline,
  mergeReselector: _transactionsReduxReselector.mergeReselector,
  push: _reactRouterRedux.push,
  request: _transactionsReduxRequest.request,
  setSubmitConfig: _transactionsCmsState.setSubmitConfig
})(Check);