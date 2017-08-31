'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsReduxRequest = require('transactions-redux-request');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.handleUpdateForm = _this._handleUpdateForm.bind(_this);
    _this.state = {
      hasRequestedOnce: false
    };
    return _this;
  }

  _createClass(Card, [{
    key: '_handleUpdateForm',
    value: function _handleUpdateForm() {
      var _props = this.props,
          collectionName = _props.collectionName,
          entityName = _props.entityName,
          formEntity = _props.formEntity,
          getSlugByEntityName = _props.getSlugByEntityName,
          isNew = _props.isNew,
          normalizer = _props.normalizer,
          requestTransactions = _props.requestTransactions,
          search = _props.search,
          setForm = _props.setForm,
          userId = _props.userId,
          userSlug = _props.userSlug;
      var hasRequestedOnce = this.state.hasRequestedOnce;
      // determine what to request

      var newForm = (0, _transactionsCmsState.getNewForm)(search);
      var notStoredOptions = newForm && (0, _transactionsReduxRequest.getNotStoredOptions)(normalizer, newForm);
      // determine the total entity
      var entity = Object.assign({}, this.props, formEntity);
      // check if we are not in the new situation in where
      // we don't have yet filled the form with an empty entity
      if (isNew && !entity.id) {
        // check first if we already downloaded the joined entities
        if (!hasRequestedOnce && notStoredOptions && notStoredOptions.length > 0) {
          this.setState({ hasRequestedOnce: true });
          requestTransactions('GET', notStoredOptions, { tag: 'form' });
        }
        // look if there is not already some properties in the search
        var collectionKey = collectionName + 'ById';
        var form = newForm || _defineProperty({}, collectionKey, { _NEW_: {} });
        // warning
        if (!form[collectionKey]) {
          console.warn('In the Card Component,\n          you need a form with ' + collectionKey);
          return;
        }
        var newEntity = form[collectionKey]._NEW_;
        if (!newEntity) {
          console.warn('In the Card Component,\n          you need a form with a new entity');
          return;
        }
        var newSlug = newEntity.slug;
        if (!newSlug) {
          var slug = getSlugByEntityName[entityName](Object.assign({}, entity, newEntity)) || (0, _shortid2.default)();
          console.warn('In the Card Component,\n          you need a new entity with a slug');
          return;
        }
        // give automatically the user id
        Object.assign(newEntity, {
          id: '_NEW_',
          slug: newSlug + '__USER__' + userSlug,
          userId: userId
        });
        // set
        setForm(form);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleUpdateForm();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleUpdateForm();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.resetForm();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          api = _props2.api,
          collectionName = _props2.collectionName,
          entityName = _props2.entityName,
          entity = _props2.entity,
          ChildComponent = _props2.ChildComponent,
          getIsEmptyForm = _props2.getIsEmptyForm,
          isEdit = _props2.isEdit,
          isNew = _props2.isNew;

      var WrappedComponent = ChildComponent.WrappedComponent || ChildComponent;
      if (!WrappedComponent) {
        console.warn('Did not find WrappedComponent in Card');
        return;
      }

      var _ref2 = WrappedComponent.defaultProps || {},
          isControl = _ref2.isControl;

      var transactionsProps = (0, _transactionsInterfaceState.getTransactionsProps)(this.props);
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        isControl && _react2.default.createElement(_Control2.default, _extends({
          collectionName: collectionName,
          entityName: entityName,
          getIsEmptyForm: getIsEmptyForm,
          isEdit: isEdit,
          isNew: isNew
        }, transactionsProps)),
        _react2.default.createElement(ChildComponent, _extends({
          api: api,
          collectionName: collectionName,
          entityName: entityName,
          isEdit: isEdit,
          isNew: isNew
        }, entity, transactionsProps))
      );
    }
  }]);

  return Card;
}(_react.Component);

function mapStateToProps(state, ownProps) {
  var collectionName = ownProps.collectionName;
  var normalizer = state.normalizer,
      search = state.router.location.search,
      _state$user = state.user,
      id = _state$user.id,
      slug = _state$user.slug;

  var formEntity = (0, _transactionsCmsState.getFormEntity)(state, collectionName, '_NEW_');
  return { normalizer: normalizer,
    search: search,
    userId: id,
    userSlug: slug
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { resetForm: _transactionsCmsState.resetForm,
  setForm: _transactionsCmsState.setForm
})(Card);