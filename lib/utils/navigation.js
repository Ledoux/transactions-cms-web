'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var handleBeforeNavigation = exports.handleBeforeNavigation = function handleBeforeNavigation(_ref) {
  var availableModes = _ref.availableModes,
      BlockComponent = _ref.BlockComponent,
      closeNavigation = _ref.closeNavigation,
      closeInformation = _ref.closeInformation,
      isNavigationActive = _ref.isNavigationActive,
      isInformationActive = _ref.isInformationActive,
      pathname = _ref.pathname,
      push = _ref.push,
      selectedMode = _ref.selectedMode,
      setAuthorizationSelectedMode = _ref.setAuthorizationSelectedMode,
      showModal = _ref.showModal,
      slug = _ref.slug;

  var search = getLocationSearch(window.location.search);
  var nextSearch = getLocationSearch(location.search);
  // special check for website when we are in new or edit mode
  var isNotBlock = getIsEditOrNewNotBlock(Object.assign({
    isNew: slug === 'new' }, search), nextSearch);
  if (isNotBlock === false) {
    nextSearch.isForcingLocationChange = 'true';
    showModal(React.createElement(BlockComponent, {
      icon: 'warning',
      subtext: 'You are still editing some content',
      text: 'Are you sure you want to leave this page ?',
      nextLocation: {
        pathname: location.pathname,
        search: getLocationSearchString(nextSearch),
        state: location.state
      }
    }), {
      beforeCloseModal: function beforeCloseModal() {
        push('/home');
      }
    });
    return isNotBlock;
  }
};