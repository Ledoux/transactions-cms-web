import classnames from 'classnames'
import React from 'react'
import { Explore as withState } from 'transactions-cms-state'
import { Button } from 'transactions-interface-web'

import Control from '../components/Control'
import List from '../components/List'

const Explore = ({ control,
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
    <div className={`explore explore--${tag}`}>
      <div className={classnames('explore__control mt1', {
        'explore__control--shrinked': isShrinked
      })}>
        <Control options={toggledOptions}
          {...control} />
      </div>
      <div className='explore__collections flex flex-wrap'>
        {
          isSelection && options.map(({ collectionName }, index) => {
            const isSelected = toggledIndexes.includes(index)
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
      <div className={classnames('explore__items-containers', {
        'explore__items-containers--shrinked': isShrinked
      })}>
        {
          !isEmpty && toggledOptions.map((selectedOption, index) => {
            return (
              <div className='explore__items-containers__child'
                key={index} >
                {
                  isSelection && (
                    <div className='explore__items-containers__child__title'>
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

export default withState(Explore)
