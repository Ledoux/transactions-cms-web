import React from 'react'
import { compose } from 'redux'
import { Travel as withState } from 'transactions-cms-state'

import SlugPick from '../components/SlugPick'

const Travel = ({ pickProps }) => {
  return (
    <div className='travel'>
      <SlugPick {...pickProps} />
    </div>
  )
}

export default withState(Travel)
