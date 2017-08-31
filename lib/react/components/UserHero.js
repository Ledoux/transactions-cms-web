'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _InputForm = require('./InputForm');

var _InputForm2 = _interopRequireDefault(_InputForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserHero = function UserHero(props) {
  var children = props.children,
      id = props.id,
      email = props.email,
      firstName = props.firstName,
      lastName = props.lastName,
      imageUrl = props.imageUrl;

  var transactionsProps = (0, _transactionsInterfaceState.getTransactionsProps)(props);
  return _react2.default.createElement(
    'div',
    { className: 'user-hero' },
    _react2.default.createElement(
      'div',
      { className: 'user-hero__illustration md-col md-col-3' },
      _react2.default.createElement(_transactionsInterfaceWeb.Avatar, {
        className: 'avatar user-hero__illustration__avatar',
        id: id,
        imageUrl: imageUrl,
        itemProp: 'image'
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'user-hero__content md-col md-col-5' },
      _react2.default.createElement(
        'div',
        { className: 'user-hero__content__name' },
        _react2.default.createElement(_InputForm2.default, _extends({
          className: 'input-form user-hero__content__name__first md-col',
          collectionName: 'users',
          entityId: id,
          label: 'First Name',
          name: 'local.firstName',
          initialValue: firstName || '',
          valueItemProp: 'givenName'
        }, transactionsProps)),
        _react2.default.createElement(_InputForm2.default, _extends({
          className: 'input-form user-hero__content__name__last md-col',
          collectionName: 'users',
          entityId: id,
          label: 'Last Name',
          name: 'local.lastName',
          initialValue: lastName || '',
          valueItemProp: 'familyName'
        }, transactionsProps))
      ),
      _react2.default.createElement(
        'div',
        { className: 'user-hero__content__email' },
        _react2.default.createElement(_InputForm2.default, _extends({
          className: 'input-form user-hero__content__email',
          collectionName: 'users',
          entityId: id,
          label: 'Email',
          name: 'local.email',
          initialValue: email || '',
          valueItemProp: 'email'
        }, transactionsProps))
      ),
      _react2.default.createElement(
        'div',
        { className: 'user-hero__content__add' },
        children
      )
    )
  );
};

exports.default = UserHero;