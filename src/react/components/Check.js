import React from 'react'
import { Warning } from 'transactions-interface-web'
import { Check as withState } from 'transactions-cms-state'

import CardContainer from '../containers/CardContainer'

// this is where one entity edition/post can be done
const Check = ({ entity,
  entityName,
  isNew,
  mergeEntity,
  slug
}) => {
  let warningMessage
  if (!isNew && !entity) {
    warningMessage = `Warning, we did not find a good entity with the slug ${slug}`
  }
  return (
    <div className='check'>
      {
        !warningMessage && <CardContainer contentName={entityName}
          entity={mergeEntity || entity}
          isChecked
          isTitle />
      }
      { warningMessage && <Warning text={warningMessage} /> }
    </div>
  )
}

export default withState(Check)
