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

var TaskComponentsByName = {
  Check: _Check2.default,
  Explore: _Explore2.default
};

var ContentPage = function (_Component) {
  _inherits(ContentPage, _Component);

  function ContentPage() {
    _classCallCheck(this, ContentPage);

    var _this = _possibleConstructorReturn(this, (ContentPage.__proto__ || Object.getPrototypeOf(ContentPage)).call(this));

    _this.state = { collectionName: null,
      entityName: null
    };
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
          singularOrPluralName = _props.singularOrPluralName;

      setSubmitName(singularOrPluralName);
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
          availableSingularOrPluralNames = _props2.availableSingularOrPluralNames,
          entityName = _props2.entityName,
          isModalActive = _props2.isModalActive,
          modes = _props2.modes,
          modeName = _props2.modeName,
          modeNamesBySingularOrPluralName = _props2.modeNamesBySingularOrPluralName,
          push = _props2.push,
          singularOrPluralName = _props2.singularOrPluralName,
          showModalModesList = _props2.showModalModesList,
          taskName = _props2.taskName,
          setAuthorizationSelectedMode = _props2.setAuthorizationSelectedMode;
      // first it is not necessary to contine if we don't have modes or if we are not
      // in a content page

      if (!taskName || !modes) {
        return;
      }
      // if we have modes then go for determining content
      if (!singularOrPluralName) {
        if (!modeName) {
          if (modes && modes.length > 0) {
            showModalModesList ? showModalModesList() : (0, _transactionsInterfaceState.showModal)('You need to choose a mode');
          } else {
            console.log('WE DON t have yet some modes');
            return;
          }
        } else {
          // for now pick it randomly
          var automaticCollectionName = (0, _transactionsInterfaceState.getAutomaticCollectionName)(availableCollectionNames);
          if (automaticCollectionName) {
            var _singularOrPluralName = taskName === 'check' ? (0, _pluralize2.default)(automaticCollectionName, 1) : automaticCollectionName;
            push('/content/' + taskName + '/' + _singularOrPluralName);
          }
        }
      } else {
        // check that maybe we changed the mode so the singularOrPluralName is deprecated
        if (availableSingularOrPluralNames && !availableSingularOrPluralNames.includes(singularOrPluralName)) {
          push('/content/' + taskName);
          return;
        }
        // and let's find automatically what it is
        var matchingModeName = modeNamesBySingularOrPluralName[singularOrPluralName];
        if (matchingModeName) {
          var suggestedMode = modes.find(function (mode) {
            return mode.name === matchingModeName;
          });
          // only set a new authorization if we have a good suggested mode
          // and that actually we are not already in that mode
          if (suggestedMode && modeName !== suggestedMode.name) {
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
          isEdit = _props3.isEdit,
          modeName = _props3.modeName,
          singularOrPluralName = _props3.singularOrPluralName,
          slug = _props3.slug,
          taskName = _props3.taskName;
      var _state = this.state,
          collectionName = _state.collectionName,
          entityName = _state.entityName;

      var componentName = taskName && '' + taskName[0].toUpperCase() + taskName.slice(1) || 'Explore';
      var TaskComponent = TaskComponentsByName[componentName];
      var label = 'content-' + collectionName;
      var options = [{ collectionName: collectionName,
        entityName: entityName,
        label: label
      }];
      return _react2.default.createElement(
        'main',
        { className: 'main page content-page' },
        _react2.default.createElement(TaskComponent, {
          api: api,
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
      mode = _ref$authorization.mode,
      modeNamesBySingularOrPluralName = _ref$authorization.modeNamesBySingularOrPluralName,
      modes = _ref$authorization.modes,
      isActive = _ref.modal.isActive;

  return { availableCollectionNames: mode && mode.availableCollectionNames,
    availableSingularOrPluralNames: mode && mode.availableSingularOrPluralNames,
    isModalActive: isActive,
    modeName: mode && mode.name,
    modeNamesBySingularOrPluralName: modeNamesBySingularOrPluralName,
    modes: modes
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { push: _reactRouterRedux.push,
  setAuthorizationSelectedMode: _transactionsAuthorizationState.setAuthorizationSelectedMode,
  setSubmitName: _transactionsCmsState.setSubmitName,
  showModal: _transactionsInterfaceState.showModal
})(ContentPage);