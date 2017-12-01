import React from 'react'
import { Pick as withState } from 'transactions-cms-state'

import CardDecorator from '../decorators/CardDecorator'

export const Pick = ({ cardDecorator }) => {
  return (
    <div className='pick'>
      <CardDecorator {...cardDecorator} />
    </div>
  )
}

export default withState(Pick)
