import React from 'react'
import { IconButton } from 'transactions-interface-web'

const CheckInteraction = ({ entityName,
  icon,
  isEdit,
  slug
}) => {
  let href = `/content/${entityName}/${slug}`
  if (isEdit) {
    href = `${href}?isEdit=true`
  }
  return <IconButton className='button button--alive check-button'
    icon={
      icon || isEdit
      ? 'pen'
      : 'eye'
    }
    href={href} />
}

export default CheckInteraction
