import classnames from 'classnames'
import React from 'react'
import { IconButton } from 'transactions-interface-web'
import { ControlBar as withState } from 'transactions-cms-state'

const ControlBar = ({ className,
  handleAddContent,
  handleRequestContent,
  isAdd,
  isSmall,
  onChangeValue,
  onKeyPress,
  options,
  placeholder
}) => {
  return (
    <div className={className || 'control flex'}>
      {
        isAdd && (
          <IconButton className={classnames(`button icon-button button--alive control__button`, {
            'control__button--small': isSmall
          })}
            icon='plus'
            onClick={handleAddContent}
          />
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
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

export default withState(ControlBar)
