import classnames from 'classnames'
import React from 'react'
import { List as withState } from 'transactions-cms-state'
import { Warning } from 'transactions-interface-web'

import Item from '../containers/Item'
import Search from './Search'

const List = ({ bottomInteractionName,
  collectionName,
  entities,
  entityName,
  exploreState,
  extraProps,
  inputTemplate,
  interactionExtraProps,
  isSearch,
  isShrinked,
  isSmall,
  label,
  leftInteractionName,
  maxDisplayCount,
  onExploreChange,
  placeholder,
  rightInteractionName
}) => {
  let warningMessage
  const entitiesLength = entities && entities.length
  if (!collectionName || entitiesLength === 0) {
    warningMessage = `No ${collectionName} found`
  }
  const displayedLength = Math.min(maxDisplayCount, entitiesLength)
  const isNotTotal = maxDisplayCount && entitiesLength > maxDisplayCount
  const isMore = maxDisplayCount && isNotTotal
  return (
    <div className={classnames('list', {
      'list--shrinked': isShrinked
    })}>
      {
        entities && entities.slice(0, displayedLength)
          .map((entity, index) => (
            <div className={classnames('list__child', {
                'list__child--shrinked': isShrinked,
                'list__child--small': isSmall
              })}
              key={index}>
                <Item collectionName={collectionName}
                  contentName={collectionName}
                  bottomInteractionName={bottomInteractionName}
                  entity={entity}
                  entityName={entityName}
                  extraProps={extraProps}
                  exploreState={exploreState}
                  interactionExtraProps={interactionExtraProps}
                  isLast={index === displayedLength - 1}
                  isShrinked={isShrinked}
                  isSmall={isSmall}
                  leftInteractionName={leftInteractionName}
                  onExploreChange={onExploreChange}
                  rightInteractionName={rightInteractionName} />
            </div>
          )
        )
      }
      {
        warningMessage && (
          <div className={classnames('list__child', {
              'list__child--shrinked': isShrinked,
              'list__child--shrinked--last': true,
              'list__child--small': isSmall
            })}
            key='more-item'>
              <Item collectionName={collectionName}
                exploreState={exploreState}
                isLast
                isShrinked={isShrinked}
                isSmall
                onExploreChange={onExploreChange}
                text={warningMessage}
              />
          </div>
        )
      }
      {
        isMore && isSearch && (
          <div className={classnames('list__child', {
              'list__child--shrinked': isShrinked,
              'list__child--shrinked--last': true,
              'list__child--small': isSmall
            })}
            key='more-item'>
              <Item collectionName={collectionName}
                exploreState={exploreState}
                isLast
                isShrinked={isShrinked}
                isSmall
                onExploreChange={onExploreChange}
                text={`Precise your search if you want to find other matching ${collectionName}`} />
          </div>
        )
      }
    </div>
  )
}

export default withState(List)
