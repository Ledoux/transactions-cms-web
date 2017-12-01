import React from 'react'
import { Pick as withState } from 'transactions-cms-state'

export const Pick = ({ className,
  content,
  ContentComponent
}) => {
  return (
    <div className={className || 'pick'}>
      { ContentComponent && <ContentComponent {...content} /> }
    </div>
  )
}

export default withState(Pick)
