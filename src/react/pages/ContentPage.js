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

const TaskComponentsByName = {
  Check,
  Explore
}

class ContentPage extends Component {
  constructor () {
    super()
    this.state = { collectionName: null,
      entityName: null
    }
    this.handleNavigation = this._handleNavigation.bind(this)
  }
  componentDidMount () {
    this.handleNavigation()
  }
  componentWillMount () {
    const { setSubmitName,
      singularOrPluralName
    } = this.props
    setSubmitName(singularOrPluralName)
  }
  componentDidUpdate () {
    this.handleNavigation()
  }
  _handleNavigation () {
    const { availableCollectionNames,
      availableSingularOrPluralNames,
      entityName,
      isModalActive,
      modes,
      modeName,
      modeNamesBySingularOrPluralName,
      push,
      singularOrPluralName,
      showModalModesList,
      taskName,
      setAuthorizationSelectedMode
    } = this.props
    // first it is not necessary to contine if we don't have modes or if we are not
    // in a content page
    if (!taskName || !modes) {
      return
    }
    // if we have modes then go for determining content
    if (!singularOrPluralName) {
      if (!modeName) {
        if (modes && modes.length > 0) {
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
          const singularOrPluralName = taskName === 'check'
          ? pluralize(automaticCollectionName, 1)
          : automaticCollectionName
          push(`/content/${taskName}/${singularOrPluralName}`)
        }
      }
    } else {
      // check that maybe we changed the mode so the singularOrPluralName is deprecated
      if (availableSingularOrPluralNames &&
        !availableSingularOrPluralNames.includes(singularOrPluralName)) {
        push(`/content/${taskName}`)
        return
      }
      // and let's find automatically what it is
      const matchingModeName = modeNamesBySingularOrPluralName[singularOrPluralName]
      if (matchingModeName) {
        const suggestedMode = modes.find(mode => mode.name === matchingModeName)
        // only set a new authorization if we have a good suggested mode
        // and that actually we are not already in that mode
        if (suggestedMode && modeName !== suggestedMode.name) {
          setAuthorizationSelectedMode(suggestedMode)
        }
      }
    }
  }
  render () {
    const { api,
      isEdit,
      modeName,
      singularOrPluralName,
      slug,
      taskName
    } = this.props
    const { collectionName,
      entityName
    } = this.state
    const componentName = (taskName &&
      `${taskName[0].toUpperCase()}${taskName.slice(1)}`) || 'Explore'
    const TaskComponent = TaskComponentsByName[componentName]
    const label = `content-${collectionName}`
    const options = [{ collectionName,
      entityName,
      label
    }]
    return (
      <main className='main page content-page'>
        <TaskComponent
          api={api}
          isEdit={isEdit}
          label={label}
          modeName={modeName}
          options={options}
          slug={slug}
        />
      </main>
    )
  }
}

function mapStateToProps ({ authorization: { mode,
    modeNamesBySingularOrPluralName,
    modes
  },
  modal: { isActive }
}) {
  return { availableCollectionNames: mode && mode.availableCollectionNames,
    availableSingularOrPluralNames: mode && mode.availableSingularOrPluralNames,
    isModalActive: isActive,
    modeName: mode && mode.name,
    modeNamesBySingularOrPluralName,
    modes
  }
}
export default connect(mapStateToProps, { push,
  setAuthorizationSelectedMode,
  setSubmitName,
  showModal
})(ContentPage)
