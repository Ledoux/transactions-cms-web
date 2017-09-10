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
var handleBeforeNavigation = exports.handleBeforeNavigation = function handleBeforeNavigation(_ref, _ref2) {
  var _ref$props = _ref.props,
      BlockComponent = _ref$props.BlockComponent,
      search = _ref$props.search,
      showModal = _ref$props.showModal,
      slug = _ref$props.slug;
  var nextLocation = _ref2.nextLocation,
      nextSearch = _ref2.nextSearch;

  // special check for website when we are in new or edit mode
  var isNotBlock = (0, _transactionsCmsState.getIsEditOrNewNotBlock)(Object.assign({
    isNew: slug === 'new' }, search), nextSearch);
  if (isNotBlock === false) {
    // careful we MUTATE HERE
    nextSearch.isForcingLocationChange = 'true';
    // showModal
    showModal(_react2.default.createElement(BlockComponent, {
      icon: 'warning',
      subtext: 'You are still editing some content',
      text: 'Are you sure you want to leave this page ?',
      nextLocation: { pathname: nextLocation.pathname,
        search: (0, _transactionsInterfaceState.getLocationSearchString)(nextSearch),
        state: nextLocation.state
      }
    }));
    return false;
  }
  return true;
};