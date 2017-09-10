'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _transactionsAuthorizationState = require('transactions-authorization-state');

var _transactionsCmsState = require('transactions-cms-state');

var _transactionsInterfaceState = require('transactions-interface-state');

var _Check = require('../components/Check');

var _Check2 = _interopRequireDefault(_Check);

var _Explore = require('../components/Explore');

var _Explore2 = _interopRequireDefault(_Explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentPage = function (_Component) {
  _inherits(ContentPage, _Component);

  function ContentPage() {
    _classCallCheck(this, ContentPage);

    var _this = _possibleConstructorReturn(this, (ContentPage.__proto__ || Object.getPrototypeOf(ContentPage)).call(this));

    _this.handleNavigation = _this._handleNavigation.bind(_this);
    return _this;
  }

  _createClass(ContentPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleNavigation();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          setSubmitName = _props.setSubmitName,
          entityOrCollectionName = _props.entityOrCollectionName;

      setSubmitName(entityOrCollectionName);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleNavigation();
    }
  }, {
    key: '_handleNavigation',
    value: function _handleNavigation() {
      var _props2 = this.props,
          availableCollectionNames = _props2.availableCollectionNames,
          availableModes = _props2.availableModes,
          availableEntityOrCollectionNames = _props2.availableEntityOrCollectionNames,
          entityName = _props2.entityName,
          entityNameOrCollectionName = _props2.entityNameOrCollectionName,
          isEntityName = _props2.isEntityName,
          isModalActive = _props2.isModalActive,
          modeNamesByEntityOrCollectionName = _props2.modeNamesByEntityOrCollectionName,
          push = _props2.push,
          isRedirect = _props2.isRedirect,
          selectedModeName = _props2.selectedModeName,
          entityOrCollectionName = _props2.entityOrCollectionName,
          showModal = _props2.showModal,
          showModalModesList = _props2.showModalModesList,
          setAuthorizationSelectedMode = _props2.setAuthorizationSelectedMode;
      // stop if no entityName or availableModes

      if (!entityName || !availableModes) {
        return;
      }
      // redirect maybe
      if (isRedirect) {
        var text = 'You need extra privilege to see this content/' + entityOrCollectionName + ' page';
        push('/home?modal=Warning&icon=exclamation&text=' + encodeURIComponent(text) + '&isForcingLocationChange=true');
      }
      // if we have modes then go for determining content
      if (!entityOrCollectionName) {
        if (!selectedModeName) {
          if (availableModes && availableModes.length > 0) {
            showModalModesList ? showModalModesList() : showModal('You need to choose a mode');
          } else {
            console.log('WE DON t have yet some modes');
            return;
          }
        } else {
          // for now pick it randomly
          var automaticCollectionName = (0, _transactionsInterfaceState.getAutomaticCollectionName)(availableCollectionNames);
          if (automaticCollectionName) {
            isEntityName ? (0, _pluralize2.default)(automaticCollectionName, 1) : automaticCollectionName;
            push('/content/' + entityOrCollectionName);
          }
        }
      } else {
        // check that maybe we changed the mode so the entityOrCollectionName is deprecated
        if (availableEntityOrCollectionNames && !availableEntityOrCollectionNames.includes(entityOrCollectionName)) {
          push('/content');
          return;
        }
        // and let's find automatically what it is
        var matchingModeName = modeNamesByEntityOrCollectionName[entityOrCollectionName];
        if (matchingModeName) {
          var suggestedMode = availableModes.find(function (availableMode) {
            return availableMode.name === matchingModeName;
          });

          console.log('suggestedMode', suggestedMode);
          // only set a new authorization if we have a good suggested mode
          // and that actually we are not already in that mode
          if (suggestedMode && selectedModeName !== suggestedMode.name) {
            setAuthorizationSelectedMode(suggestedMode);
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          api = _props3.api,
          collectionName = _props3.collectionName,
          entityName = _props3.entityName,
          entityOrCollectionName = _props3.entityOrCollectionName,
          isEdit = _props3.isEdit,
          isEntityName = _props3.isEntityName,
          modeName = _props3.modeName,
          slug = _props3.slug;

      var label = 'content-' + collectionName;
      var options = [{ collectionName: collectionName,
        entityName: entityName,
        label: label
      }];
      var TaskComponent = isEntityName ? _Check2.default : _Explore2.default;
      return _react2.default.createElement(
        'main',
        { className: 'main page content-page' },
        entityName && _react2.default.createElement(TaskComponent, {
          api: api,
          collectionName: collectionName,
          entityName: entityName,
          isEdit: isEdit,
          label: label,
          modeName: modeName,
          options: options,
          slug: slug
        })
      );
    }
  }]);

  return ContentPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var _ref$authorization = _ref.authorization,
      availableCollectionNames = _ref$authorization.availableCollectionNames,
      availableModes = _ref$authorization.availableModes,
      modeNamesByEntityOrCollectionName = _ref$authorization.modeNamesByEntityOrCollectionName,
      selectedMode = _ref$authorization.selectedMode,
      isActive = _ref.modal.isActive,
      _ref$submit = _ref.submit,
      collectionName = _ref$submit.collectionName,
      entityName = _ref$submit.entityName,
      isEntityName = _ref$submit.isEntityName;

  return { availableCollectionNames: selectedMode && selectedMode.availableCollectionNames,
    availableEntityOrCollectionNames: selectedMode && selectedMode.availableEntityOrCollectionNames,
    availableModes: availableModes,
    collectionName: collectionName,
    entityName: entityName,
    isEntityName: isEntityName,
    isModalActive: isActive,
    isRedirect: !availableCollectionNames || !availableCollectionNames.includes(collectionName),
    modeNamesByEntityOrCollectionName: modeNamesByEntityOrCollectionName,
    selectedModeName: selectedMode && selectedMode.name
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { push: _reactRouterRedux.push,
  setAuthorizationSelectedMode: _transactionsAuthorizationState.setAuthorizationSelectedMode,
  setSubmitName: _transactionsCmsState.setSubmitName,
  showModal: _transactionsInterfaceState.showModal
})(ContentPage);