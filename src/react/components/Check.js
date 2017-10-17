import React from 'react'
import { Warning } from 'transactions-interface-web'
import { Check as withState } from 'transactions-cms-state'

import Card from '../containers/Card'

// this is where one entity edition/post can be done
const Check = ({ api,
  entity,
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
      <div className='check__content'>
        {
          !warningMessage && <Card api={api}
            contentName={entityName}
            entity={mergeEntity || entity}
            isChecked
            isTitle />
        }
        { warningMessage && <Warning text={warningMessage} /> }
      </div>
    </div>
  )
}

export default withState(Check)
