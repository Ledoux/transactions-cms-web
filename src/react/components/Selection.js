import React from 'react'

import Explore from './Explore'

const Selection = ({ selectedExplore,
  selectingExplore
}) => {
  return (
    <div>
      <Explore {...selectedExplore} />
      <Explore {...selectingExplore} />
    </div>
  )
}

export default Selection
