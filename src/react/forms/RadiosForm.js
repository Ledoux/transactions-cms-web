import classnames from 'classnames'
import React from 'react'
import { RadiosForm as withState } from 'transactions-cms-state'

const RadiosForm = props => {
  const { evaluationId,
    entities,
    isConclusion,
    isFrozen,
    onMouseEnter,
    onMouseLeave,
    onRadioClick,
    selectedRadio,
    state,
    title
  } = props
  const { maxEvaluationValue } = state
  return (
    <div className='radios-form'
      onMouseLeave={onMouseLeave} >
      <p className='radios-form__title'>
        {title}
      </p>
      <div className='radios-form__values'>
        {
          entities && entities.map(({ id,
            info,
            label,
            value
          }, index) => {
            const isMax = value === maxEvaluationValue
            const isSelected = id === evaluationId
            const parentId = `radios-form__values__item--${index}`
            return (
              <div className={classnames(
                'radios-form__values__item', {
                'radios-form__values__item--selected': isSelected
                })}
              id={parentId}
              key={index}
              onMouseEnter={() => onMouseEnter({ info,
                parentId })
              } >
                <input className={classnames(
                    'radios-form__values__item__input', {
                    'radios-form__values__item__input--disabled': isFrozen
                  })}
                  checked={isSelected}
                  disabled={isFrozen}
                  onClick={() => onRadioClick(id)}
                  readOnly
                  type='radio'
                />
                {label}
                {
                  isMax && (
                    <span itemProp='bestRating' hidden>
                      {value}
                    </span>
                  )
                }
                {
                  isSelected && (
                    <span itemProp='ratingValue' hidden>
                      {value}
                    </span>
                  )
                }
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default withState(RadiosForm)
