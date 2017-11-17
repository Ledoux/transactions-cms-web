import classnames from 'classnames'
import React from 'react'
import { Stream as withState } from 'transactions-cms-state'

import CardDecorator from '../decorators/CardDecorator'

const Stream = ({ cardDecoratorProps,
  className,
  entities,
  force,
  isBorder,
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
            <CardDecorator entity={entity} {...cardDecoratorProps} />
          </div>
        ))
      }
    </div>
  )
}

export default withState(Stream)
