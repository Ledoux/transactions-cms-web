import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getAutomaticSlug,
  closeModal
} from 'transactions-interface-state'
import { assignPipeline,
  getFormEntity,
  getPipelineEntities,
  getPipelineEntity,
  setSubmitConfig
} from 'transactions-cms-state'
import { Warning } from 'transactions-interface-web'
import { request } from 'transactions-redux-request'
import { mergeReselector } from 'transactions-redux-reselector'
import pluralize from 'pluralize'

import Card from './Card'

// this is where one entity edition/post can be done
class Check extends Component {
  constructor () {
    super()
    this.state = { hasRequestedOnce: false }
    this.handleNavigation = this._handleNavigation.bind(this)
  }
  componentDidMount () {
    this.handleNavigation()
  }
  componentDidUpdate () {
    this.handleNavigation()
  }
  componentWillMount () {
    const { isEdit,
      setSubmitConfig,
      slug
    } = this.props
    setSubmitConfig({ isEdit,
      isNew: slug === 'new'
    })
  }
  componentWillUnmount () {
    this.props.mergeReselector({
      WITH_SLUG: {
        slug: null
      }
    })
  }
  _handleNavigation () {
    const { assignPipeline,
      collectionName,
      dispatch,
      entityName,
      entities,
      entity,
      filterSlug,
      isEdit,
      isNew,
      isModalActive,
      mergeReselector,
      newEntity,
      pipelineEntitiesLength,
      pipelineEntity,
      push,
      request,
      slug
    } = this.props
    const { hasRequestedOnce } = this.state
    if (collectionName) {
      if (!slug) {
        // check first that we have data
        if (!pipelineEntitiesLength && !hasRequestedOnce) {
          this.setState({hasRequestedOnce: true})
          request('GET',
            [ { collectionName } ],
            `${collectionName}-check`
          )
          return
        }
        const automaticSlug = getAutomaticSlug(entities)
        if (automaticSlug) {
          push(`/content/check/${entityName}/${automaticSlug}`)
        }
      } else {
        // it is a content slug but we don't have yet the entity
        // because the filter slug is not set yet
        if (!isNew) {
          if (filterSlug !== slug) {
            mergeReselector({
              WITH_SLUG: {
                slug
              }
            })
            return
          }
        }
        // now make sure that we will have the entity (if it exists)
        if (!entity) {
          if (!hasRequestedOnce) {
            // either this is not the new mode,
            // so we have actually the slug and we can peacefully
            // get the matching already stored entity
            // Or actually we don't have the slug, buu actually
            // this new entity has some joined entities needed
            // and that are sotred in the new form object
            if (!isNew || newEntity) {
              this.setState({ hasRequestedOnce: true })
              request('GET',
                [ { collectionName, query: { slug } } ],
                collectionName
              )
            }
          }
        } else if (!pipelineEntity) {
          assignPipeline({
            [`${collectionName}ById`]: {
              [entity.id]: entity
          }})
        }
      }
    }
  }
  render () {
    const { api,
      ContentComponent,
      entity,
      entityName,
      isNew,
      isNotPipelinedYet,
      pipelineEntity,
      slug
    } = this.props
    let warningMessage
    if (!isNew && !isNotPipelinedYet && !entity) {
      warningMessage = `Warning, we did not find a good entity with the slug ${slug}`
    }
    if (typeof ContentComponent === 'undefined') {
      warningMessage = `Warning, we did not define yet a Card for the ${entityName} entity`
    }
    return (
      <div className='check'>
        <div className='check__content'>
          {
            !warningMessage && ContentComponent && <Card
              api={api}
              ChildComponent={ContentComponent}
              entity={entity}
              isTitle
            />
          }
          { warningMessage && <Warning text={warningMessage} /> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { cardViewer,
    modal: { isActive },
    reselector: { getFilteredElements,
      WITH_SLUG
    },
    submit: { collectionName,
      entityName,
      isNew
    }
  } = state
  const ContentComponent = entityName && cardViewer[entityName]
  const slugEntities = collectionName && getFilteredElements(state,
    'WITH_SLUG', collectionName)
  const entity = collectionName && slugEntities && slugEntities.length === 1 && slugEntities[0]
  const pipelineEntity = entity && getPipelineEntity(state,
    collectionName, entity.id)
  const newEntity = collectionName && isNew &&
    getFormEntity(state, collectionName, '_NEW_')
  const pipelineEntities = getPipelineEntities(state, collectionName)
  return { collectionName,
    ContentComponent,
    entity,
    entityName,
    filterSlug: WITH_SLUG.slug,
    isModalActive: isActive,
    isNew,
    newEntity,
    pipelineEntitiesLength: pipelineEntities.length,
    pipelineEntity
  }
}
export default connect(mapStateToProps, { assignPipeline,
  mergeReselector,
  push,
  request,
  setSubmitConfig
})(Check)
