import classnames from 'classnames'
import React from 'react'
import { Stream as withState } from 'transactions-cms-state'

const Stream = ({ className,
  content,
  ContentComponent,
  entities,
  selectedIndex
}) => {
  return (
    <div className={className || 'stream'}>
      {
        entities && entities.map((entity, index) => (
          <div key={index} className={
            classnames('stream__element flex items-center justify-center', {
              'stream__element--selected': index === selectedIndex
            })} >
            <ContentComponent {...entity} {...content} index={index} />
          </div>
        ))
      }
    </div>
  )
}

export default withState(Stream)
