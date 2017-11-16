import classnames from 'classnames'
import React from 'react'
import { CardDecorator as withState } from 'transactions-cms-state'

import Control from '../components/Control'

const CardDecorator = ({ content,
  ContentComponent,
  entityName,
  isBorder,
  isControl
}) => {
  return (
    <div className={classnames(`card-decorator card-decorator--${entityName}`, {
        'card-decorator--border': isBorder
      })}>
      { isControl && <Control /> }
      { ContentComponent && <ContentComponent {...content} /> }
    </div>
  )
}

export default withState(CardDecorator)
