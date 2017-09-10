import classnames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getFormPutOptions,
  resetForm
} from 'transactions-cms-state'
import { getUpdatedSearchString,
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
  isAllowed,
  isEdit,
  isNew,
  pathname,
  push,
  redirectPathname,
  request,
  resetForm,
  showModal
}) => {
  return (
    <Button
      className={classnames(className ||
        'button button--alive submit-button', {
        'button--disabled': !isAllowed
      })}
      disabled={!isAllowed}
      onClick={() => {
        if (isEdit || isNew) {
          const formPutOptions = getFormPutOptions(form)
          console.log('formPutOptions', formPutOptions)
          resetForm()
          formPutOptions && request('PUT', formPutOptions, { tag: 'submit' })
          redirectPathname && push(`/${redirectPathname}?isForcingLocationChange=true`)
        } else {
          push(`${pathname}?isEdit=true`)
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
    router: { location: { pathname } },
    submit: { isAllowed,
      isEdit,
      isNew
    }
  } = state
  return { form,
    isAllowed,
    isEdit,
    isNew,
    pathname
  }
}
export default connect(mapStateToProps, { push,
  resetForm,
  request,
  showModal
})(SubmitButton)
