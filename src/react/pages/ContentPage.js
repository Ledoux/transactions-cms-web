import React from 'react'
import { ContentPage as withState } from 'transactions-cms-state'

import Check from '../components/Check'
import Explore from '../components/Explore'

const ContentPage = ({ api,
  collectionName,
  entityName,
  entityOrCollectionName,
  isEdit,
  isEntityName,
  modeName,
  slug,
}) => {
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

export default withState(ContentPage)
