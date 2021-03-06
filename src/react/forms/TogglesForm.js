import classnames from 'classnames'
import React from 'react'
import { TogglesForm as withState } from 'transactions-cms-state'

const TogglesForm = ({ isFrozen,
  entities,
  colIndexes,
  onToggleClick,
  selectedIds,
  title
}) => {
  return (
    <div className='toggles-form'>
      {
        title && (
          <div className='toggles-form__title'>
            {title}
          </div>
        )
      }
      {
        entities && colIndexes.map(colIndex => (
          <div className={`toggles-form__labels md-col md-col-${colIndexes.length}`}
            key={colIndex} >
            {
              entities.slice(
                colIndex * (entities.length/colIndexes.length),
                (colIndex + 1) * (entities.length/colIndexes.length)
              ).map(({ id, label }, index) => {
                const isSelected = selectedIds && selectedIds.includes(id)
                return (
                  <div className={classnames(
                    'toggles-form__labels__item', {
                      'toggles-form__labels__item--selected': isSelected
                    })}
                    key={index} >
                    <input className={classnames(
                        'toggles-form__labels__item__input', {
                        'toggles-form__labels__item__input--disabled': isFrozen
                      })}
                      defaultChecked={isSelected}
                      disabled={isFrozen}
                      onClick={() => onToggleClick(id)}
                      readOnly
                      type='checkbox' />
                    {label}
                  </div>
                )
              })
            }
          </div>
        ))
      }
    </div>
  )
}

export default withState(TogglesForm)
