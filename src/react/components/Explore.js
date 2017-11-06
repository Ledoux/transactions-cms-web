import classnames from 'classnames'
import React from 'react'
import { Explore as withState } from 'transactions-cms-state'
import { Button } from 'transactions-interface-web'

import List from './List'
import Control from './Control'

const Explore = ({ control,
  isControl,
  isShrinked,
  isSmall,
  onExploreChange,
  onSelectionClick,
  options,
  state,
  tag
}) => {
  const { selectedIndexes } = state
  const selectedOptions = selectedIndexes.map(selectedIndex =>
    options[selectedIndex])
  selectedOptions.sort((a, b) => a.collectionName - b.collectionName)
  const isSelection = options && options.length > 1
  const isLists = selectedOptions.length > 0
  return (
    <div className='explore'>
      <div className={classnames('explore__control', {
        'explore__control--shrinked': isShrinked
      })}>
        <Control exploreState={state}
          onExploreChange={onExploreChange}
          options={selectedOptions}
          tag={tag}
          {...control} />
      </div>
      <div className='explore__collections flex flex-wrap'>
        {
          isSelection && options.map(({ collectionName }, index) => {
            const isSelected = selectedIndexes.includes(index)
            return (
              <Button className={classnames('button button--alive explore__collections__child', {
                  'explore__collections__child--selected': isSelected
                })}
                key={index}
                onClick={() => onSelectionClick(index)} >
                { collectionName }
              </Button>
            )
          })
        }
      </div>
      <div className={classnames('explore__lists', {
        'explore__lists--shrinked': isShrinked
      })}>
        {
          isLists && selectedOptions.map((selectedOption, index) => {
            return (
              <div className='explore__lists__child'
                key={index} >
                {
                  isSelection && (
                    <p className='explore__lists__child__title'>
                      {selectedOption.collectionName}
                    </p>
                  )
                }
                <List collectionName={selectedOption.collectionName}
                  exploreState={state}
                  isControl
                  isShrinked={isShrinked}
                  isSmall={isSmall}
                  onExploreChange={onExploreChange}
                  {...selectedOption} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default withState(Explore)
