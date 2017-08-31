import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTransactionsProps } from 'transactions-interface-state'
import { getFormEntity,
  getNewForm,
  resetForm,
  setForm
} from 'transactions-cms-state'
import { getNotStoredOptions } from 'transactions-redux-request'
import shortid from 'shortid'

import Control from './Control'

class Card extends Component {
  constructor () {
    super ()
    this.handleUpdateForm = this._handleUpdateForm.bind(this)
    this.state = {
      hasRequestedOnce: false
    }
  }
  _handleUpdateForm () {
    const { collectionName,
      entityName,
      formEntity,
      getSlugByEntityName,
      isNew,
      normalizer,
      requestTransactions,
      search,
      setForm,
      userId,
      userSlug
    } = this.props
    const { hasRequestedOnce } = this.state
    // determine what to request
    const newForm = getNewForm(search)
    const notStoredOptions = newForm && getNotStoredOptions(normalizer,
      newForm
    )
    // determine the total entity
    const entity = Object.assign({}, this.props, formEntity)
    // check if we are not in the new situation in where
    // we don't have yet filled the form with an empty entity
    if (isNew && !entity.id) {
      // check first if we already downloaded the joined entities
      if (!hasRequestedOnce && notStoredOptions && notStoredOptions.length > 0) {
        this.setState({hasRequestedOnce: true})
        requestTransactions('GET', notStoredOptions, { tag: 'form' })
      }
      // look if there is not already some properties in the search
      const collectionKey = `${collectionName}ById`
      const form = newForm || {
        [collectionKey]: { _NEW_: {} }
      }
      // warning
      if (!form[collectionKey]) {
        console.warn(`In the Card Component,
          you need a form with ${collectionKey}`)
        return
      }
      const newEntity = form[collectionKey]._NEW_
      if (!newEntity) {
        console.warn(`In the Card Component,
          you need a form with a new entity`)
        return
      }
      const newSlug = newEntity.slug
      if (!newSlug) {
        const slug = getSlugByEntityName[entityName](
          Object.assign({}, entity, newEntity)) || shortid()
        console.warn(`In the Card Component,
          you need a new entity with a slug`)
        return
      }
      // give automatically the user id
      Object.assign(newEntity, {
        id: '_NEW_',
        slug: `${newSlug}__USER__${userSlug}`,
        userId
      })
      // set
      setForm(form)
    }
  }
  componentDidMount () {
    this.handleUpdateForm()
  }
  componentDidUpdate () {
    this.handleUpdateForm()
  }
  componentWillUnmount () {
    this.props.resetForm()
  }
  render () {
    const { api,
      collectionName,
      entityName,
      entity,
      ChildComponent,
      getIsEmptyForm,
      isEdit,
      isNew
    } = this.props
    const WrappedComponent = ChildComponent.WrappedComponent || ChildComponent
    if (!WrappedComponent) {
      console.warn('Did not find WrappedComponent in Card')
      return
    }
    const { isControl } = WrappedComponent.defaultProps || {}
    const transactionsProps = getTransactionsProps(this.props)
    return (<div className='card'>
      {
        isControl && <Control
          collectionName={collectionName}
          entityName={entityName}
          getIsEmptyForm={getIsEmptyForm}
          isEdit={isEdit}
          isNew={isNew}
          {...transactionsProps}
        />
      }
      <ChildComponent
        api={api}
        collectionName={collectionName}
        entityName={entityName}
        isEdit={isEdit}
        isNew={isNew}
        {...entity}
        {...transactionsProps}
      />
    </div>)
  }
}

function mapStateToProps (state, ownProps) {
  const { collectionName } = ownProps
  const { normalizer,
    router: { location: { search } },
    user: { id,
      slug
    }
  } = state
  const formEntity = getFormEntity(state, collectionName, '_NEW_')
  return { normalizer,
    search,
    userId: id,
    userSlug: slug
  }
}
export default connect(mapStateToProps, { resetForm,
  setForm
})(Card)
