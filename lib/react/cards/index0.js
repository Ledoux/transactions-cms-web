'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Check = require('./Check');

var _Check2 = _interopRequireDefault(_Check);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _EditButton = require('./EditButton');

var _EditButton2 = _interopRequireDefault(_EditButton);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentsByComponentName = { Card: _Card2.default,
  Check: _Check2.default,
  Control: _Control2.default,
  EditButton: _EditButton2.default,
  Item: _Item2.default,
  List: _List2.default,
  Search: _Search2.default
};
exports.default = ComponentsByComponentName;