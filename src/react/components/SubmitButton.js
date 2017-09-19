import classnames from 'classnames'
import React from 'react'
import { SubmitButton as withState } from 'transactions-cms-state'
import { Button,
  Confirmation
} from 'transactions-interface-web'

const SubmitButton = ({ className,
  isAllowed,
  onClick
}) => {
  return (
    <Button className={classnames(className ||
        'button button--alive submit-button', {
        'button--disabled': !isAllowed
      })}
      disabled={!isAllowed}
      onClick={onClick} >
      Submit
    </Button>
  )
}

export default withState(SubmitButton)
