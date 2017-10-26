import classnames from 'classnames'
import React from 'react'
import { CardContainer as withState } from 'transactions-cms-state'

import Control from '../components/Control'

const CardContainer = ({ entity,
  entityId,
  entityName,
  ContentComponent,
  isBorder,
  isControl
}) => {
  return (
    <div className={classnames(`card-container card-container--${entityName}`, {
        'card-container--border': isBorder
      })}>
      { isControl && <Control /> }
      <ContentComponent id={entityId} {...entity} />
    </div>
  )
}

export default withState(CardContainer)
