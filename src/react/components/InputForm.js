import pluralize from 'pluralize'
import React, { Component } from 'react'
import DebounceInput from 'react-debounce-input'
import { connect } from 'react-redux'
import { deleteFormEntity,
  mergeForm,
  mergeFormEntity
} from 'transactions-cms-state'
import { request } from 'transactions-redux-request'
import { assignReselectorFilter } from 'transactions-redux-reselector'

class InputForm extends Component {
  constructor () {
    super()
    this.state = { entityName: null,
      value: null
    }
    this.handleChangeValue = this._handleChangeValue.bind(this)
  }
  componentWillMount () {
    this.setState ({
      entityName: pluralize(this.props.collectionName, 1)
    })
  }
  shouldComponentUpdate (nextProps, nextState) {
    const { value } = this.state
    return !value || value !== nextState.value
  }
  componentDidUpdate () {
    const { assignReselectorFilter,
      collectionName,
      deleteFormEntity,
      entity,
      entityId,
      initialValue,
      isNew,
      joinCollectionName,
      joinKey,
      joinId,
      joinValue,
      label,
      mergeForm,
      mergeFormEntity,
      name,
      request
    } = this.props
    const { entityName,
      hasRequestedOnce,
      value
    } = this.state
    // all here is just necessary when we type
    // something in the input
    // so leave if not
    if (!value) {
      return
    }
    // first check that we adapted the filter
    if (joinValue !== value) {
      assignReselectorFilter('WITH_SIGN_JOIN', {
        // do the sign given the label
        key: name,
        sign: label,
        value
      })
    }
    // check that it exists in the db if we could not find it before
    if (!entity) {
      request('GET', [{
        collectionName,
        query: {
          [name]: value
        }
      }], { tag: collectionName })
    }
    // else we set the new form if we have new content
    if (entity && (isNew || joinId) && entityId !== entity.id) {
      mergeForm({
        [`${joinCollectionName}ById`]: {
          [isNew ? '_NEW_' : joinId]: {
            [`${entityName}Id`]: entity.id
          }
        }
      }, {
        [`${collectionName}ById`]: {
          _NEW_: '_DELETE_'
        }
      })
    } else if (value === initialValue) {
      // either we refuind the odl initial value
      // so we cancel what we just did
      deleteFormEntity(collectionName, '_NEW_')
    } else {
      // else we add in the new
      mergeFormEntity(collectionName, entityId || '_NEW_', {
        [name]: value
      })
    }
  }
  _handleChangeValue (event) {
    const { assignReselectorFilter,
      joinValue,
      label,
      name,
      onChangeValue
    } = this.props
    // adapt the value locally
    const value = event.target.value || ''
    this.setState({ value })
    onChangeValue && onChangeValue(value)
  }
  render () {
    const { handleChangeValue } =  this
    const { className,
      entity,
      initialValue,
      isEdit,
      isHTML,
      isNew,
      itemProp,
      itemScope,
      itemType,
      label,
      name,
      slug,
      valueItemProp
    } = this.props
    let { value } = this.state
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
            : (<p
              className='input-form__content__text'
              itemProp={valueItemProp}
            >
              {value}
            </p>)
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
}

function mapStateToProps(state, { collectionName,
  label
}) {
  const { reselector: { getFilteredElements,
      WITH_SIGN_JOIN: {
        key,
        sign,
        value
      }
    },
    submit: { isEdit,
      isNew
    }
  } = state
  const newState = { isEdit,
    isNew
  }
  if (label === sign) {
    const entities = getFilteredElements(state, 'WITH_SIGN_JOIN', collectionName)
    const entity = entities.length === 1 && entities[0]
    Object.assign(newState, { entity,
      joinKey: key,
      joinValue: value
    })
  }
  return newState
}
export default connect(mapStateToProps, { assignReselectorFilter,
  deleteFormEntity,
  mergeForm,
  mergeFormEntity,
  request
})(InputForm)
