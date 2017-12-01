import classnames from 'classnames'
import React from 'react'
import { ExploreTask as withState } from 'transactions-cms-state'
import { Button } from 'transactions-interface-web'

import ControlBar from '../components/ControlBar'
import List from '../containers/List'

const ExploreTask = ({ control,
  isControl,
  isEmpty,
  isSelection,
  isShrinked,
  isSmall,
  list,
  onSelectionClick,
  options,
  tag,
  toggledOptions
}) => {
  return (
    <div className={`explore-task explore-task--${tag}`}>
      <div className={classnames('explore-task__control mt1', {
        'explore-task__control--shrinked': isShrinked
      })}>
        <ControlBar options={toggledOptions} {...control} />
      </div>
      <div className='explore-task__collections flex flex-wrap'>
        {
          isSelection && options.map(({ collectionName }, index) => {
            const isSelected = toggledIndexes.includes(index)
            return (
              <Button className={classnames('button button--alive explore-task__collections__child', {
                  'explore-task__collections__child--selected': isSelected
                })}
                key={index}
                onClick={() => onSelectionClick(index)} >
                { collectionName }
              </Button>
            )
          })
        }
      </div>
      <div className={classnames('explore-task__items-containers', {
        'explore-task__items-containers--shrinked': isShrinked
      })}>
        {
          !isEmpty && toggledOptions.map((selectedOption, index) => {
            return (
              <div className='explore-task__items-containers__child'
                key={index} >
                {
                  isSelection && (
                    <div className='explore-task__items-containers__child__title'>
                      {selectedOption.collectionName}
                    </div>
                  )
                }
                <List {...list}
                  collectionName={selectedOption.collectionName}
                  {...selectedOption} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default withState(ExploreTask)
