import classnames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { resetForm } from 'transactions-cms-state'
import { getFormPutOptions,
  getUpdatedSearchString,
  showModal
} from 'transactions-interface-state'
import { Button,
  Confirmation,
  Icon
} from 'transactions-interface-web'
import { request } from 'transactions-redux-request'

const SubmitButton = ({ className,
  ConfirmationComponent,
  form,
  isSubmitAllowed,
  isEdit,
  isNew,
  push,
  request,
  resetForm,
  showModal
}) => {
  return (
    <Button
      className={classnames(className ||
        'button button--alive submit-button', {
        'button--disabled': !isSubmitAllowed
      })}
      disabled={!isSubmitAllowed}
      onClick={() => {
        if (isEdit || isNew) {
          const formPutOptions = getFormPutOptions(form)
          resetForm()
          formPutOptions && request('PUT', formPutOptions, { tag: 'submit' })
          push(`/home?isForcingLocationChange=true`)
        } else {
          push(`${window.location.pathname}?isEdit=true`)
        }
        showModal(<ConfirmationComponent />, { isCtaCloseButton: true })
      }}
    >
      Submit
    </Button>
  )
}

SubmitButton.defaultProps = {
  ConfirmationComponent: Confirmation
}

function mapStateToProps (state) {
  const { form,
    submit: { isAllowed }
  } = state
  return { form,
    isSubmitAllowed: isAllowed
  }
}
export default connect(mapStateToProps, { push,
  resetForm,
  request,
  showModal
})(SubmitButton)
