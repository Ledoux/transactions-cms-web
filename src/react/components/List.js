import classnames from 'classnames'
import React from 'react'
import { List as withState } from 'transactions-cms-state'

import ItemDecorator from '../decorators/ItemDecorator'

const List = ({ collectionName,
  displayedLength,
  itemDecoratorProps,
  entities,
  entityName,
  isMore,
  isNotTotal,
  isSearch,
  isShrinked,
  isSmall,
  maxDisplayCount
}) => {
  return (
    <div className={classnames('list', {
      'list--shrinked': isShrinked })}>
      {
        entities && entities.slice(0, displayedLength)
          .map((entity, index) => (
            <div className={classnames('list__child', {
                'list__child--shrinked': isShrinked,
                'list__child--small': isSmall
              })}
              key={index}>
                <ItemDecorator entity={entity}
                  {...itemDecoratorProps}
                  isLast={index === displayedLength - 1} />
            </div>
          )
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
              <ItemDecorator {...itemDecoratorProps}
                isLast
                isSmall
                text={`Precise your search if you want to find other matching ${collectionName}`} />
          </div>
        )
      }
    </div>
  )
}

export default withState(List)
