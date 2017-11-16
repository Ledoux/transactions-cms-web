import React from 'react'
import { EditButton as withState } from 'transactions-cms-state'
import { Button,
  Icon
} from 'transactions-interface-web'

const EditButton = ({ pathname,
  push
}) => {
  return  (
    <Button
      className={`button button--alive edit-button`}
      onClick={() => {
        push(`${pathname}?isEdit=true`)
      }}
    >
      <Icon className='icon edit-button__icon' icon='pen' />
    </Button>
  )
}

export default withState(EditButton)
