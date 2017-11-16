import React from 'react'
import { Pick as withState } from 'transactions-cms-state'

import CardDecorator from '../decorators/CardDecorator'

export const Pick = ({ cardDecoratorProps }) => {
  return (
    <div className='pick'>
      <CardDecorator {...cardDecoratorProps} />
    </div>
  )
}

export default withState(Pick)
