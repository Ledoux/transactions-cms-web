import React from 'react'
import { Warning } from 'transactions-interface-web'
import { Check as withState } from 'transactions-cms-state'

import Card from './Card'

// this is where one entity edition/post can be done
const Check = ({
  api,
  collectionName,
  ContentComponent,
  entity,
  entityName,
  isNew,
  isNotPipelinedYet,
  pipelineEntity,
  slug
}) => {
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
            collectionName={collectionName}
            entity={entity}
            entityName={entityName}
            ChildComponent={ContentComponent}
            isNew={isNew}
            isTitle
          />
        }
        { warningMessage && <Warning text={warningMessage} /> }
      </div>
    </div>
  )
}

export default withState(Check)
