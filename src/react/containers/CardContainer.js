import classnames from 'classnames'
import React from 'react'
import { CardContainer as withState } from 'transactions-cms-state'

import Control from '../components/Control'

const CardContainer = ({ collectionName,
  contentName,
  ContentComponent,
  entity,
  entityId,
  extraProps,
  isBorder,
  isControl
}) => {
  return (
    <div className={classnames(`card-container card-container--${contentName}`, {
        'card-container--border': isBorder
      })}>
      { isControl && <Control /> }
      <ContentComponent collectionName={collectionName}
        id={entityId}
        {...entity}
        {...extraProps} />
    </div>
  )
}

export default withState(CardContainer)
