import React from 'react'
import { Card as withState } from 'transactions-cms-state'

import Control from '../components/Control'

const Card = ({ api,
  entity,
  ContentComponent,
  isControl
}) => {
  return (
    <div className='card'>
      { isControl && <Control /> }
      <ContentComponent api={api} {...entity} />
    </div>
  )
}

export default withState(Card)
