'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsReduxRequest = require('transactions-redux-request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitButton = function SubmitButton(_ref) {
  var className = _ref.className,
      ConfirmationComponent = _ref.ConfirmationComponent,
      form = _ref.form,
      isSubmitAllowed = _ref.isSubmitAllowed,
      isEdit = _ref.isEdit,
      isNew = _ref.isNew,
      push = _ref.push,
      request = _ref.request,
      resetForm = _ref.resetForm,
      showModal = _ref.showModal;

  return _react2.default.createElement(
    _transactionsInterfaceWeb.Button,
    {
      className: (0, _classnames2.default)(className || 'button button--alive submit-button', {
        'button--disabled': !isSubmitAllowed
      }),
      disabled: !isSubmitAllowed,
      onClick: function onClick() {
        if (isEdit || isNew) {
          var formPutOptions = (0, _transactionsInterfaceState.getFormPutOptions)(form);
          resetForm();
          formPutOptions && request('PUT', formPutOptions, { tag: 'submit' });
          push('/home?isForcingLocationChange=true');
        } else {
          push(window.location.pathname + '?isEdit=true');
        }
        showModal(_react2.default.createElement(ConfirmationComponent, null), { isCtaCloseButton: true });
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
      isAllowed = state.submit.isAllowed;

  return { form: form,
    isSubmitAllowed: isAllowed
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { push: _reactRouterRedux.push,
  resetForm: _transactionsCmsState.resetForm,
  request: _transactionsReduxRequest.request,
  showModal: _transactionsInterfaceState.showModal
})(SubmitButton);