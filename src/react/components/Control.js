import classnames from 'classnames'
import React from 'react'
import { IconButton } from 'transactions-interface-web'
import { Control as withState } from 'transactions-cms-state'

const Control = ({ className,
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
    <div className={className || 'control flex'}>
      {
        interactions && interactions.map(({ getClassName,
          icon,
          onClick
        }, index) => (
          <IconButton className={(getClassName && getClassName(exploreState)) || classnames(`button icon-button button--alive control__button`, {
            'control__button--small': isSmall
          })}
          key={index}
          icon={icon}
          onClick={event => onClick(event, exploreState)} />
        ))
      }
      {
        isAdd && (
          <IconButton className={classnames(`button icon-button button--alive control__button`, {
            'control__button--small': isSmall
          })}
          icon='plus'
          onClick={handleAddContent} />
        )
      }
      <IconButton className={classnames(`button icon-button button--alive control__button`, {
          'control__button--small': isSmall
        })}
        icon='magnifying_glass'
        onClick={handleRequestContent}
      />
      <input className={classnames(`control__input flex-auto`, {
          'control__input--small': isSmall,
          'control__input--add': isAdd
        })}
        type='text'
        placeholder={placeholder}
        onChange={onChangeValue}
        onKeyPress={onKeyPress} />
    </div>
  )
}

export default withState(Control)
