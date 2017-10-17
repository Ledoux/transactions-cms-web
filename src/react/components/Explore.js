import classnames from 'classnames'
import React from 'react'
import { Explore as withState } from 'transactions-cms-state'
import { Button } from 'transactions-interface-web'

import List from './List'
import Search from './Search'

const Explore = ({ extra,
  getRequestQuery,
  inputTemplate,
  interactions,
  isAdd,
  isSearch,
  isShrinked,
  isSmall,
  label,
  onExploreChange,
  onSelectionClick,
  options,
  placeholder,
  state
}) => {
  const { selectedIndexes } = state
  const selectedOptions = selectedIndexes.map(selectedIndex =>
    options[selectedIndex])
  selectedOptions.sort((a, b) => a.collectionName - b.collectionName)
  const isSelection = options && options.length > 1
  const isLists = selectedOptions.length > 0
  return (
    <div className='explore'>
      {
        isSearch && (
          <div className={classnames('explore__search', {
              'explore__search--shrinked': isShrinked
          })}>
            <Search exploreState={state}
              getRequestQuery={getRequestQuery}
              interactions={interactions}
              inputTemplate={inputTemplate}
              isAdd
              label={label}
              onExploreChange={onExploreChange}
              options={selectedOptions}
              placeholder={placeholder} />
          </div>
        )
      }
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
                  isSearch={isSearch}
                  isShrinked={isShrinked}
                  isSmall={isSmall}
                  label={label}
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
