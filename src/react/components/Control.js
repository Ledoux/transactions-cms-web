import React from 'react'
import { getTransactionsProps } from 'transactions-interface-state'

import EditButton from './EditButton'
import SubmitButton from './SubmitButton'

const Control = props => {
  const { getIsEmptyForm,
    history,
    isEdit,
    isNew
  } = props
  const transactionsProps = getTransactionsProps(props)
  return (
    <div className='control flex flex-auto'>
      {
        (isEdit || isNew)
        ? <SubmitButton
          getIsEmptyForm={getIsEmptyForm}
          history={history}
          isEdit={isEdit}
          isNew={isNew}
          {...transactionsProps}
        />
        : <EditButton history={history} />
      }
    </div>
  )
}

export default Control
