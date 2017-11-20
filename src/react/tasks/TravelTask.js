import React from 'react'
import { compose } from 'redux'
import { TravelTask as withState } from 'transactions-cms-state'

import SlugPick from '../components/SlugPick'

const TravelTask = ({ pickProps }) => {
  return (
    <div className='travel-task'>
      <SlugPick {...pickProps} />
    </div>
  )
}

export default withState(TravelTask)
