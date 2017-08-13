import React from 'react'
const { IconButton } = require('transactions-interface-web').default

const CheckInteraction = ({ entityName,
  history,
  slug
}) => {
  return <IconButton
    className='button button--alive check-interaction'
    icon='pen'
    href={`/content/check/${entityName}/${slug}`}
  />
}

export default CheckInteraction
