'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBeforeNavigation = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceState = require('transactions-interface-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function should return true if you want to continue next
var handleBeforeNavigation = exports.handleBeforeNavigation = function handleBeforeNavigation(_ref) {
  var availableModes = _ref.availableModes,
      BlockComponent = _ref.BlockComponent,
      nextSearch = _ref.nextSearch,
      pathname = _ref.pathname,
      push = _ref.push,
      search = _ref.search,
      showModal = _ref.showModal,
      slug = _ref.slug;

  // special check for website when we are in new or edit mode
  var isNotBlock = (0, _transactionsCmsState.getIsEditOrNewNotBlock)(Object.assign({
    isNew: slug === 'new' }, search), nextSearch);
  if (isNotBlock === false) {
    nextSearch.isForcingLocationChange = 'true';
    showModal(_react2.default.createElement(BlockComponent, {
      icon: 'warning',
      subtext: 'You are still editing some content',
      text: 'Are you sure you want to leave this page ?',
      nextLocation: { pathname: location.pathname,
        search: (0, _transactionsInterfaceState.getLocationSearchString)(nextSearch),
        state: location.state
      }
    }), {
      beforeCloseModal: function beforeCloseModal() {
        push('/home');
      }
    });
    return isNotBlock;
  }
  return true;
};