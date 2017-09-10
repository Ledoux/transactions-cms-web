'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDebounceInput = require('react-debounce-input');

var _reactDebounceInput2 = _interopRequireDefault(_reactDebounceInput);

var _reactRedux = require('react-redux');

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsReduxRequest = require('transactions-redux-request');

var _transactionsReduxReselector = require('transactions-redux-reselector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputForm = function (_Component) {
  _inherits(InputForm, _Component);

  function InputForm() {
    _classCallCheck(this, InputForm);

    var _this = _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this));

    _this.state = { entityName: null,
      value: null
    };
    _this.handleChangeValue = _this._handleChangeValue.bind(_this);
    return _this;
  }

  _createClass(InputForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        entityName: (0, _pluralize2.default)(this.props.collectionName, 1)
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var value = this.state.value;

      return !value || value !== nextState.value;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          assignReselectorFilter = _props.assignReselectorFilter,
          collectionName = _props.collectionName,
          deleteFormEntity = _props.deleteFormEntity,
          entity = _props.entity,
          entityId = _props.entityId,
          initialValue = _props.initialValue,
          isNew = _props.isNew,
          joinCollectionName = _props.joinCollectionName,
          joinKey = _props.joinKey,
          joinId = _props.joinId,
          joinValue = _props.joinValue,
          label = _props.label,
          mergeForm = _props.mergeForm,
          mergeFormEntity = _props.mergeFormEntity,
          name = _props.name,
          request = _props.request;
      var _state = this.state,
          entityName = _state.entityName,
          hasRequestedOnce = _state.hasRequestedOnce,
          value = _state.value;
      // all here is just necessary when we type
      // something in the input
      // so leave if not

      if (!value) {
        return;
      }
      // first check that we adapted the filter
      if (joinValue !== value) {
        assignReselectorFilter('WITH_SIGN_JOIN', {
          // do the sign given the label
          key: name,
          sign: label,
          value: value
        });
      }
      // check that it exists in the db if we could not find it before
      if (!entity) {
        request('GET', [{
          collectionName: collectionName,
          query: _defineProperty({}, name, value)
        }], { tag: collectionName });
      }
      // else we set the new form if we have new content
      if (entity && (isNew || joinId) && entityId !== entity.id) {
        mergeForm(_defineProperty({}, joinCollectionName + 'ById', _defineProperty({}, isNew ? '_NEW_' : joinId, _defineProperty({}, entityName + 'Id', entity.id))), _defineProperty({}, collectionName + 'ById', {
          _NEW_: '_DELETE_'
        }));
      } else if (value === initialValue) {
        // either we refuind the odl initial value
        // so we cancel what we just did
        deleteFormEntity(collectionName, '_NEW_');
      } else {
        // else we add in the new
        mergeFormEntity(collectionName, entityId || '_NEW_', _defineProperty({}, name, value));
      }
    }
  }, {
    key: '_handleChangeValue',
    value: function _handleChangeValue(event) {
      var _props2 = this.props,
          assignReselectorFilter = _props2.assignReselectorFilter,
          joinValue = _props2.joinValue,
          label = _props2.label,
          name = _props2.name,
          onChangeValue = _props2.onChangeValue;
      // adapt the value locally

      var value = event.target.value || '';
      this.setState({ value: value });
      onChangeValue && onChangeValue(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var handleChangeValue = this.handleChangeValue;
      var _props3 = this.props,
          className = _props3.className,
          entity = _props3.entity,
          initialValue = _props3.initialValue,
          isEdit = _props3.isEdit,
          isHTML = _props3.isHTML,
          isNew = _props3.isNew,
          itemProp = _props3.itemProp,
          itemScope = _props3.itemScope,
          itemType = _props3.itemType,
          label = _props3.label,
          name = _props3.name,
          slug = _props3.slug,
          valueItemProp = _props3.valueItemProp;
      var value = this.state.value;

      if (typeof value !== 'string') {
        value = initialValue || '';
      }
      var isText = !isNew && !isEdit;
      var info = value === initialValue ? '(FOUND)' : entity ? '(NEW FOUND)' : '(NEW)';
      return _react2.default.createElement(
        'div',
        {
          className: className || 'input-form',
          itemProp: itemProp,
          itemScope: itemScope,
          itemType: itemType
        },
        !isText && _react2.default.createElement(
          'div',
          { className: 'input-form__title' },
          _react2.default.createElement(
            'label',
            { className: 'input-form__title__label' },
            label,
            ' ',
            info
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-form__content' },
          isText ? isHTML ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: value } }) : _react2.default.createElement(
            'p',
            {
              className: 'input-form__content__text',
              itemProp: valueItemProp
            },
            value
          ) : _react2.default.createElement(_reactDebounceInput2.default, {
            className: 'input-form__content__input',
            debounceTimeout: 500,
            name: name,
            type: 'text',
            onChange: function onChange(event) {
              return handleChangeValue(event);
            },
            required: true,
            value: value
          })
        )
      );
    }
  }]);

  return InputForm;
}(_react.Component);

function mapStateToProps(state, _ref3) {
  var collectionName = _ref3.collectionName,
      label = _ref3.label;
  var _state$reselector = state.reselector,
      reselect = _state$reselector.reselect,
      _state$reselector$WIT = _state$reselector.WITH_SIGN_JOIN,
      key = _state$reselector$WIT.key,
      sign = _state$reselector$WIT.sign,
      value = _state$reselector$WIT.value,
      _state$submit = state.submit,
      isEdit = _state$submit.isEdit,
      isNew = _state$submit.isNew;

  var newState = { isEdit: isEdit,
    isNew: isNew
  };
  if (label === sign) {
    var entities = reselect(state, 'WITH_SIGN_JOIN', collectionName);
    var entity = entities.length === 1 && entities[0];
    Object.assign(newState, { entity: entity,
      joinKey: key,
      joinValue: value
    });
  }
  return newState;
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { assignReselectorFilter: _transactionsReduxReselector.assignReselectorFilter,
  deleteFormEntity: _transactionsCmsState.deleteFormEntity,
  mergeForm: _transactionsCmsState.mergeForm,
  mergeFormEntity: _transactionsCmsState.mergeFormEntity,
  request: _transactionsReduxRequest.request
})(InputForm);