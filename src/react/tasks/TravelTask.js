import React from 'react'
import { compose } from 'redux'
import { TravelTask as withState } from 'transactions-cms-state'

import SlugPick from '../components/SlugPick'

const TravelTask = ({ slugPick }) => {
  return (
    <div className='travel-task'>
      <SlugPick {...slugPick} />
    </div>
  )
}

export default withState(TravelTask)
