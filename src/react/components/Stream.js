import classnames from 'classnames'
import React from 'react'
import { Stream as withState } from 'transactions-cms-state'

import CardDecorator from '../decorators/CardDecorator'

const Stream = ({ className,
  contentName,
  entities,
  extraProps,
  isBorder,
  selectedIndex
}) => {
  return (
    <div className={className || 'stream'}>
      {
        entities && entities.map((entity, index) => (
          <div key={index} className={classnames('stream__element flex items-center justify-center', {
              'stream__element--selected': index === selectedIndex
            })} >
            <CardDecorator contentName={contentName}
              entity={entity}
              extraProps={Object.assign({ isHalfSize: true }, extraProps)}
              isBorder />
          </div>
        ))
      }
    </div>
  )
}

export default withState(Stream)
