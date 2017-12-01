import classnames from 'classnames'
import React from 'react'
import { ExploreTask as withState } from 'transactions-cms-state'
import { Button } from 'transactions-interface-web'

import ControlBar from '../components/ControlBar'
import List from '../containers/List'

const ExploreTask = ({ collectionName,
  control,
  isControl,
  isShrinked,
  isSmall,
  list,
  tag
}) => {
  return (
    <div className={`explore-task explore-task--${tag}`}>
      {
        isControl && (
          <div className={classnames('explore-task__control mt1', {
            'explore-task__control--shrinked': isShrinked
          })}>
            <ControlBar {...control} />
          </div>
        )
      }
      <div className={classnames('explore-task__list', {
        'explore-task__list--shrinked': isShrinked
      })}>
        <List {...list} />
      </div>
    </div>
  )
}

export default withState(ExploreTask)
