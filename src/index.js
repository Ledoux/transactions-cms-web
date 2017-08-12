const CardsByComponentName = require('./react/cards').default
const ComponentsByComponentName = require('./react/components').default
const InteractionsByComponentName = require('./react/interactions').default
const ItemsByComponentName = require('./react/items').default
const PagesByComponentName = require('./react/pages').default

const transactionsCmsWeb = Object.assign({},
  CardsByComponentName,
  ComponentsByComponentName,
  InteractionsByComponentName,
  ItemsByComponentName,
  PagesByComponentName
)
export default transactionsCmsWeb
