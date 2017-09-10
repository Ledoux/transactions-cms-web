import React from 'react'
import DebounceInput from 'react-debounce-input'
import { InputForm as withState } from 'transactions-cms-state'

const InputForm = ({ className,
  entity,
  handleChangeValue,
  initialValue,
  isEdit,
  isHTML,
  isNew,
  itemProp,
  itemScope,
  itemType,
  label,
  name,
  state,
  slug,
  valueItemProp
}) => {
  let { value } = state
  if (typeof value !== 'string') {
    value = initialValue || ''
  }
  const isText = !isNew && !isEdit
  const info = value === initialValue
  ? '(FOUND)'
  : (entity ? '(NEW FOUND)' : '(NEW)')
  return (
    <div
      className={ className || 'input-form' }
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
    >
      {
        !isText && (<div className='input-form__title'>
           <label className='input-form__title__label'>
            {label} {info}
          </label>
        </div>)
      }
      <div className='input-form__content'>
      {
        isText
        ? (
          isHTML
          ? <div dangerouslySetInnerHTML={{ __html: value }} />
          : (
            <p className='input-form__content__text'
              itemProp={valueItemProp}
            >
              {value}
            </p>
          )
        )
        : <DebounceInput
            className='input-form__content__input'
            debounceTimeout={500}
            name={name}
            type='text'
            onChange={event => handleChangeValue(event)}
            required
            value={value}
          />
      }
    </div>
  </div>
  )
}

export default withState(InputForm)
