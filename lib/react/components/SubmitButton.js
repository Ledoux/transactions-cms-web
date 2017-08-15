'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitButton = function SubmitButton(_ref) {
  var collectionName = _ref.collectionName,
      ConfirmationComponent = _ref.ConfirmationComponent,
      dispatch = _ref.dispatch,
      entity = _ref.entity,
      entityName = _ref.entityName,
      firstName = _ref.firstName,
      form = _ref.form,
      formPutOptions = _ref.formPutOptions,
      getIsEmptyForm = _ref.getIsEmptyForm,
      history = _ref.history,
      isEdit = _ref.isEdit,
      isNew = _ref.isNew,
      requestTransactions = _ref.requestTransactions;

  var isEmptyForm = !form || getIsEmptyForm && getIsEmptyForm(form, {
    entity: entity,
    isNew: isNew,
    isEdit: isEdit
  }) || false;
  return _react2.default.createElement(
    _transactionsInterfaceWeb.Button,
    {
      className: (0, _classnames2.default)('button button--alive check-submit-button', {
        'button--disabled': isEmptyForm
      }),
      disabled: isEmptyForm,
      onClick: function onClick() {
        if (isEdit || isNew) {
          dispatch((0, _transactionsCmsState.resetForm)());
          formPutOptions && dispatch(requestTransactions('PUT', formPutOptions));
          history.push('/home?isForcingLocationChange=true');
        } else {
          history.push(window.location.pathname + '?isEdit=true');
        }
        dispatch((0, _transactionsInterfaceState.showModal)(_react2.default.createElement(ConfirmationComponent, null), { isCtaCloseButton: true }));
      }
    },
    'Submit'
  );
};

SubmitButton.defaultProps = {
  ConfirmationComponent: _transactionsInterfaceWeb.Confirmation
};

function mapStateToProps(state) {
  var form = state.form,
      firstName = state.user.firstName;

  var formPutOptions = (0, _transactionsCmsState.getFormPutOptions)(state);
  return { firstName: firstName,
    form: form,
    formPutOptions: formPutOptions
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
  return { dispatch: dispatch };
})(SubmitButton);