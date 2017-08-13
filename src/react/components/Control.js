import React from 'react'
const { SubmitButton } = require('transactions-interface-web').default

import EditButton from './EditButton'

const Control = ({ getFilteredElements,
  getIsEmptyForm,
  history,
  isEdit,
  isNew,
  requestTransactions
}) => {
  return (
    <div className='control flex flex-auto'>
      {
        (isEdit || isNew)
        ? <SubmitButton
          getFilteredElements={getFilteredElements}
          getIsEmptyForm={getIsEmptyForm}
          history={history}
          isEdit={isEdit}
          isNew={isNew}
          requestTransactions={requestTransactions}
        />
        : <EditButton history={history} />
      }
    </div>
  )
}

export default Control
