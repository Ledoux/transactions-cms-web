'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _Explore = require('../components/Explore');

var _Explore2 = _interopRequireDefault(_Explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersExploreOptions = [{ collectionName: 'users',
  maxDisplayCount: 3
  // RightInteractionComponent: UserInteraction
}];

var AdminDashboard = function AdminDashboard(props) {
  var transactionsProps = (0, _transactionsInterfaceState.getTransactionsProps)(props);
  return _react2.default.createElement(
    'div',
    { className: 'admin-dashboard' },
    _react2.default.createElement(
      'p',
      { className: 'admin-dashboard__title' },
      'This is the admin dashboard!'
    ),
    _react2.default.createElement(
      'div',
      { className: 'admin-dashboard__users' },
      _react2.default.createElement(_transactionsInterfaceWeb.Title, { icon: 'experts', text: 'USERS' }),
      _react2.default.createElement(_Explore2.default, _extends({
        getRequestQuery: function getRequestQuery(query) {
          // attributes in the user objects
          // are contained into the nested local object
          var requestQuery = {};
          Object.keys(query).forEach(function (queryKey) {
            var requestQueryKey = queryKey.replace(/_in_/g, '').replace('_or_', '_or__in_local.').replace(/_OR_/g, '_OR__in_local.');
            requestQuery[requestQueryKey] = query[queryKey];
          });
          return requestQuery;
        },
        inputTemplate: '_or__in_firstName_OR__in_lastName_OR__in_email:{{value}}',
        isAdd: true,
        label: 'admin-users',
        options: usersExploreOptions,
        placeholder: 'search for users'
      }, transactionsProps))
    )
  );
};

exports.default = AdminDashboard;