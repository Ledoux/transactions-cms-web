import React from 'react'
import { connect } from 'react-redux'

import EditButton from './EditButton'
import SubmitButton from './SubmitButton'

const Control = ({ isEdit,
  isNew
}) => {
  return (
    <div className='control flex flex-auto'>
      {
        (isEdit || isNew)
        ? <SubmitButton />
        : <EditButton />
      }
    </div>
  )
}

const mapStateToProps = ({ submit: { isEdit,
  isNew }
}) => {
  return { isEdit,
    isNew
  }
}
export default connect(mapStateToProps)(Control)
