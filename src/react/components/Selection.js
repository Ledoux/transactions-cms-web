import React from 'react'

import ExploreTask from '../tasks/ExploreTask'

const Selection = ({ selectedExplore,
  selectingExplore
}) => {
  return (
    <div>
      <ExploreTask {...selectedExplore} />
      <ExploreTask {...selectingExplore} />
    </div>
  )
}

export default Selection
