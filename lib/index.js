'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CardsByComponentName = require('./react/cards').default;
var ComponentsByComponentName = require('./react/components').default;
var InteractionsByComponentName = require('./react/interactions').default;
var ItemsByComponentName = require('./react/items').default;
var PagesByComponentName = require('./react/pages').default;

var transactionsCmsWeb = Object.assign({}, CardsByComponentName, ComponentsByComponentName, InteractionsByComponentName, ItemsByComponentName, PagesByComponentName);
exports.default = transactionsCmsWeb;