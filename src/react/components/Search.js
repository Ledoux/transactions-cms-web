import classnames from 'classnames'
import React from 'react'
import { IconButton } from 'transactions-interface-web'
import { Search as withState } from 'transactions-cms-state'

const AND_SEPARATOR = ' '
const SEPARATOR = ':'

const Search = ({ className,
  exploreState,
  handleAddContent,
  handleRequestContent,
  interactions,
  isAdd,
  isSmall,
  onChangeValue,
  onKeyPress,
  onExploreChange,
  options,
  placeholder
}) => {
  return (
    <div className={className || 'search flex'}>
      {
        interactions && interactions.map(({ getClassName,
          icon,
          onClick
        }, index) => (<IconButton
          className={(getClassName && getClassName(exploreState)) || classnames(`button icon-button button--alive search__button`, {
            'search__button--small': isSmall
          })}
          key={index}
          icon={icon}
          onClick={event => onClick(event, exploreState)}
        />))
      }
      {
        isAdd && (<IconButton
          className={classnames(`button icon-button button--alive search__button`, {
            'search__button--small': isSmall
          })}
          icon='plus'
          onClick={handleAddContent}
        />)
      }
      <IconButton
        className={classnames(`button icon-button button--alive search__button`, {
          'search__button--small': isSmall
        })}
        icon='magnifying_glass'
        onClick={handleRequestContent}
      />
      <input
        className={classnames(`search__input flex-auto`, {
          'search__input--small': isSmall,
          'search__input--add': isAdd
        })}
        type='text'
        placeholder={placeholder}
        onChange={onChangeValue}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

export default withState(Search)
