import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button,
  Icon
} from 'transactions-interface-web'

const EditButton = ({ push }) => {
  return  (
    <Button
      className={`button button--alive edit-button`}
      onClick={() => {
        push(`${window.location.pathname}?isEdit=true`)
      }}
    >
      <Icon className='icon edit-button__icon' icon='pen' />
    </Button>
  )
}

export default connect(null, { push })(EditButton)
