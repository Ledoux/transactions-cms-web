import classnames from 'classnames'
import React from 'react'
import DebounceInput from 'react-debounce-input'
import { InputForm as withState } from 'transactions-cms-state'

const InputForm = ({ className,
  initialValue,
  isFrozen,
  isHTML,
  itemProp,
  itemScope,
  itemType,
  label,
  name,
  onChangeValue,
  state,
  slug,
  tag,
  value,
  valueItemProp
}) => {
  if (typeof value !== 'string') {
    value = initialValue || ''
  }
  return (
    <div className={ className || 'input-form' }
      id={tag}
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType} >
      {
        !isFrozen && (
          <div className='input-form__title'>
             <label className='input-form__title__label'>
              {label}
            </label>
          </div>
        )
      }
      <div className='input-form__content'>
      {
        isFrozen
        ? (
          isHTML
          ? <div dangerouslySetInnerHTML={{ __html: value }} />
          : (
              <p className='input-form__content__text'
                itemProp={valueItemProp} >
                {value}
              </p>
            )
        )
        : <DebounceInput className='input-form__content__input'
            debounceTimeout={500}
            name={name}
            type='text'
            onChange={onChangeValue}
            required
            value={value} />
      }
      </div>
  </div>
  )
}

export default withState(InputForm)
