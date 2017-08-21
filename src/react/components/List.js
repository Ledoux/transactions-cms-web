import classnames from 'classnames'
import pluralize from 'pluralize'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNormalizerEntities } from 'transactions-redux-normalizer'
import { getTransactionsProps } from 'transactions-interface-state'
import { Warning } from 'transactions-interface-web'

import Item from './Item'
import Search from './Search'

class List extends Component {
  constructor () {
    super()
    this.state = { entityName: null }
    this.handleSetEntityName = this._handleSetEntityName.bind(this)
  }
  _handleSetEntityName (props) {
    this.setState({ entityName: pluralize(props.collectionName, 1) })
  }
  componentWillMount () {
    this.handleSetEntityName(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.collectionName !== this.props.collectionName) {
      this.handleSetEntityName(nextProps)
    }
  }
  render () {
    const { BottomInteractionComponent,
      collectionName,
      ContentComponent,
      entities,
      exploreState,
      extraProps,
      inputTemplate,
      interactionExtraProps,
      isSearch,
      isShrinked,
      isSmall,
      label,
      LeftInteractionComponent,
      maxDisplayCount,
      onExploreChange,
      placeholder,
      RightInteractionComponent
    } = this.props
    const { entityName } = this.state
    let warningMessage
    const entitiesLength = entities && entities.length
    if (collectionName && entitiesLength > 0) {
      if (typeof ContentComponent === 'undefined') {
        warningMessage = `Warning, there is no a defined Item Component for ${collectionName}`
      }
    } else {
      warningMessage = `No ${collectionName} found`
    }
    const displayedLength = Math.min(maxDisplayCount, entitiesLength)
    const isNotTotal = maxDisplayCount && entitiesLength > maxDisplayCount
    const isMore = maxDisplayCount && isNotTotal
    const transactionsProps = getTransactionsProps(this.props)
    return (<div className={classnames('list', {
      'list--shrinked': isShrinked
    })}>
      {
        ContentComponent && entities && entities
          .slice(0, displayedLength)
          .map((entity, index) => (<div
            className={classnames('list__child', {
              'list__child--shrinked': isShrinked,
              'list__child--small': isSmall
            })}
            key={index}>
              <Item
                ContentComponent={ContentComponent}
                BottomInteractionComponent={BottomInteractionComponent}
                entity={entity}
                entityName={entityName}
                extraProps={extraProps}
                exploreState={exploreState}
                interactionExtraProps={interactionExtraProps}
                isLast={index === displayedLength - 1}
                isShrinked={isShrinked}
                isSmall={isSmall}
                LeftInteractionComponent={LeftInteractionComponent}
                onExploreChange={onExploreChange}
                RightInteractionComponent={RightInteractionComponent}
                {...transactionsProps}
              />
          </div>)
        )
      }
      {
        warningMessage && (<div
          className={classnames('list__child', {
            'list__child--shrinked': isShrinked,
            'list__child--shrinked--last': true,
            'list__child--small': isSmall
          })}
          key='more-item'>
            <Item
              collectionName={collectionName}
              exploreState={exploreState}
              isLast
              isShrinked={isShrinked}
              isSmall
              onExploreChange={onExploreChange}
              text={warningMessage}
            />
        </div>)
      }
      {
        ContentComponent && isMore && (<div
          className={classnames('list__child', {
            'list__child--shrinked': isShrinked,
            'list__child--shrinked--last': true,
            'list__child--small': isSmall
          })}
          key='more-item'>
            <Item
              collectionName={collectionName}
              exploreState={exploreState}
              isLast
              isShrinked={isShrinked}
              isSmall
              onExploreChange={onExploreChange}
              text={`Precise your search if you want to find other matching ${collectionName}`}
            />
        </div>)
      }
    </div>)
  }
}

List.defaultProps = {
  ItemComponentsByCollectionName: {},
  label: 'default',
  maxDisplayCount: 10000
}

// we get the entities from the pipelined entities
// stored in the location reducer
function mapStateToProps(state, { collectionName,
  getFilteredElements,
  label
}) {
  const { itemViewer,
    reselector: {
      WITH_SIGN_SEARCH: {
        query,
        sign
      }
    }
  } = state
  // no need to go further if no collectionName
  if (!collectionName) {
    return {}
  }
  const ContentComponent = itemViewer[collectionName]
  // let s see if we need to restrict because of a search filter
  const entities = getFilteredElements(state,
    (query && sign === label)
    ? 'WITH_SIGN_SEARCH'
    : 'ALL',
    collectionName, { isRecursive: true })
  // return
  return { ContentComponent,
    entities
  }
}
export default connect(mapStateToProps)(List)
