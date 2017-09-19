import React from 'react'

import Control from './Control'

const Card = ({ api,
  entity,
  ContentComponent
}) => {
  const WrappedComponent = ContentComponent.WrappedComponent || ContentComponent
  if (!WrappedComponent) {
    console.warn('Did not find WrappedComponent in Card')
    return
  }
  const { isControl } = WrappedComponent.defaultProps || {}
  return (
    <div className='card'>
      { isControl && <Control /> }
      <ContentComponent api={api}
        {...entity}
      />
    </div>
  )
}

export default Card
