import classnames from 'classnames'
import React from 'react'
import { List as withState } from 'transactions-cms-state'

const List = ({ content,
  ContentComponent,
  displayedLength,
  entities,
  entityName,
  extraClass,
  getClass,
  getOn,
  isNotTotal,
  isShrinked,
  isSmall,
  maxDisplayCount
}) => {
  return (
    <div className={classnames(`list list--${entityName}`, {
      'list--shrinked': isShrinked,
      [extraClass]: extraClass })}>
      {
        entities && entities.slice(0, displayedLength)
          .map((entity, index) => (
            <div className={classnames('list__child', {
                'list__child--shrinked': isShrinked,
                'list__child--small': isSmall
              }, getClass && getClass(entity, index))}
              key={index}
              {...getOn && getOn(entity, index)} >
                <ContentComponent {...content}
                  {...entity}
                  index={index}
                  isLast={index === displayedLength - 1} />
            </div>
          )
        )
      }
    </div>
  )
}

export default withState(List)
