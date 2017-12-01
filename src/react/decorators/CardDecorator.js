import classnames from 'classnames'
import React from 'react'
import { CardDecorator as withState } from 'transactions-cms-state'

const CardDecorator = ({ content,
  ContentComponent,
  entityName,
  isBorder
}) => {
  return (
    <div className={classnames(`card-decorator card-decorator--${entityName}`, {
        'card-decorator--border': isBorder
      })}>
      { ContentComponent && <ContentComponent {...content} /> }
    </div>
  )
}

export default withState(CardDecorator)
