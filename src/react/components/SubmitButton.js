import classnames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'
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

const SubmitButton = ({ collectionName,
  ConfirmationComponent,
  dispatch,
  entity,
  entityName,
  firstName,
  form,
  formPutOptions,
  getIsEmptyForm,
  history,
  isEdit,
  isNew,
  requestTransactions
}) => {
  const isEmptyForm = !form || getIsEmptyForm &&
    getIsEmptyForm(form, {
      entity,
      isNew,
      isEdit
    }) || false
  return (<Button
    className={classnames(`button button--alive check-submit-button`, {
      'button--disabled': isEmptyForm
    })}
    disabled={isEmptyForm}
    onClick={() => {
      if (isEdit || isNew) {
        dispatch(resetForm())
        formPutOptions && dispatch(requestTransactions('PUT', formPutOptions))
        history.push(`/home?isForcingLocationChange=true`)
      } else {
        history.push(`${window.location.pathname}?isEdit=true`)
      }
      dispatch(showModal(<ConfirmationComponent />, { isCtaCloseButton: true }))
    }}
  >
    Submit
  </Button>)
}

SubmitButton.defaultProps = {
  ConfirmationComponent: Confirmation
}

function mapStateToProps (state) {
  const { form,
    user: {
      firstName
    }
  } = state
  const formPutOptions = getFormPutOptions(state)
  return { firstName,
    form,
    formPutOptions
  }
}
export default connect(mapStateToProps, dispatch => {
  return { dispatch }
})(SubmitButton)
