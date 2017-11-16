import React from 'react'
import { Travel as withState } from 'transactions-cms-state'

import Pick from '../components/Pick'

const Travel = ({ slug }) => {
  console.log('slug', slug)
  return (
    <div className='travel'>
      <Pick slug={slug} isTitle />
    </div>
  )
}

export default withState(Travel)
