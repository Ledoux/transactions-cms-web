import React from 'react'
import { Card as withState } from 'transactions-cms-state'

import Control from './Control'

const Card = ({ api,
  entity,
  ChildComponent
}) => {
  const WrappedComponent = ChildComponent.WrappedComponent || ChildComponent
  if (!WrappedComponent) {
    console.warn('Did not find WrappedComponent in Card')
    return
  }
  const { isControl } = WrappedComponent.defaultProps || {}
  return (
    <div className='card'>
      { isControl && <Control /> }
      <ChildComponent api={api}
        {...entity}
      />
    </div>
  )
}

export default withState(Card)
