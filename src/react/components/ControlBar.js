import classnames from 'classnames'
import React from 'react'
import { IconButton } from 'transactions-interface-web'
import { ControlBar as withState } from 'transactions-cms-state'

import { Loading } from 'transactions-interface-web'

const ControlBar = ({ className,
  handleAddContent,
  handleRequestContent,
  isAdd,
  isLoadingActive,
  isSmall,
  onChangeValue,
  onKeyPress,
  options,
  placeholder
}) => {
  return (
    <div className={className || 'control-bar flex'}>
      {
        isAdd && (
          <IconButton className={classnames(`button icon-button button--alive control-bar__button`, {
            'control-bar__button--small': isSmall
          })}
            icon='plus'
            onClick={handleAddContent}
          />
        )
      }
      {
        isLoadingActive
        ? <div className={classnames(`button icon-button control-bar__button`, {
            'control-bar__button--small': isSmall
          })}> <Loading /> </div>
        : (
          <IconButton className={classnames(`button icon-button button--alive control-bar__button`, {
              'control-bar__button--small': isSmall
            })}
            icon='magnifying_glass'
            onClick={handleRequestContent}
          />
        )
      }
      <input className={classnames(`control-bar__input flex-auto`, {
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
