import pluralize from 'pluralize'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { setAuthorizationSelectedMode } from 'transactions-authorization-state'
import { setSubmitName } from 'transactions-cms-state'
import { closeModal,
  getAutomaticCollectionName,
  showModal,
  transact
} from 'transactions-interface-state'

import Check from '../components/Check'
import Explore from '../components/Explore'

class ContentPage extends Component {
  constructor () {
    super()
    this.handleNavigation = this._handleNavigation.bind(this)
  }
  componentDidMount () {
    this.handleNavigation()
  }
  componentWillMount () {
    const { setSubmitName,
      entityOrCollectionName
    } = this.props
    setSubmitName(entityOrCollectionName)
  }
  componentDidUpdate () {
    this.handleNavigation()
  }
  _handleNavigation () {
    const { availableCollectionNames,
      availableModes,
      availableEntityOrCollectionNames,
      entityName,
      entityNameOrCollectionName,
      isEntityName,
      isModalActive,
      modeNamesByEntityOrCollectionName,
      push,
      isRedirect,
      selectedModeName,
      entityOrCollectionName,
      showModal,
      showModalModesList,
      setAuthorizationSelectedMode
    } = this.props
    // stop if no entityName or availableModes
    if (!entityName || !availableModes) {
      return
    }
    // redirect maybe
    if (isRedirect) {
      const text = `You need extra privilege to see this content/${entityOrCollectionName} page`
      push(`/home?modal=Warning&icon=exclamation&text=${encodeURIComponent(text)}&isForcingLocationChange=true`)
    }
    // if we have modes then go for determining content
    if (!entityOrCollectionName) {
      if (!selectedModeName) {
        if (availableModes && availableModes.length > 0) {
          showModalModesList
            ? showModalModesList()
            : showModal('You need to choose a mode')
        } else {
          console.log('WE DON t have yet some modes')
          return
        }
      } else {
        // for now pick it randomly
        const automaticCollectionName = getAutomaticCollectionName(availableCollectionNames)
        if (automaticCollectionName) {
          isEntityName
          ? pluralize(automaticCollectionName, 1)
          : automaticCollectionName
          push(`/content/${entityOrCollectionName}`)
        }
      }
    } else {
      // check that maybe we changed the mode so the entityOrCollectionName is deprecated
      if (availableEntityOrCollectionNames &&
        !availableEntityOrCollectionNames.includes(entityOrCollectionName)) {
        push(`/content`)
        return
      }
      // and let's find automatically what it is
      const matchingModeName = modeNamesByEntityOrCollectionName[entityOrCollectionName]
      if (matchingModeName) {
        const suggestedMode = availableModes.find(availableMode =>
          availableMode.name === matchingModeName)

        console.log('suggestedMode', suggestedMode)
        // only set a new authorization if we have a good suggested mode
        // and that actually we are not already in that mode
        if (suggestedMode && selectedModeName !== suggestedMode.name) {
          setAuthorizationSelectedMode(suggestedMode)
        }
      }
    }
  }
  render () {
    const { api,
      collectionName,
      entityName,
      entityOrCollectionName,
      isEdit,
      isEntityName,
      modeName,
      slug,
    } = this.props
    const label = `content-${collectionName}`
    const options = [{ collectionName,
      entityName,
      label
    }]
    const TaskComponent = isEntityName ? Check : Explore
    return (
      <main className='main page content-page'>
        {
          entityName && <TaskComponent
            api={api}
            collectionName={collectionName}
            entityName={entityName}
            isEdit={isEdit}
            label={label}
            modeName={modeName}
            options={options}
            slug={slug}
          />
        }
      </main>
    )
  }
}

function mapStateToProps ({ authorization: { availableCollectionNames,
    availableModes,
    modeNamesByEntityOrCollectionName,
    selectedMode
  },
  modal: { isActive },
  submit: { collectionName,
    entityName,
    isEntityName
  }
}) {
  return { availableCollectionNames: selectedMode && selectedMode.availableCollectionNames,
    availableEntityOrCollectionNames: selectedMode && selectedMode.availableEntityOrCollectionNames,
    availableModes,
    collectionName,
    entityName,
    isEntityName,
    isModalActive: isActive,
    isRedirect: !availableCollectionNames || !availableCollectionNames.includes(collectionName),
    modeNamesByEntityOrCollectionName,
    selectedModeName: selectedMode && selectedMode.name
  }
}
export default connect(mapStateToProps, { push,
  setAuthorizationSelectedMode,
  setSubmitName,
  showModal
})(ContentPage)
