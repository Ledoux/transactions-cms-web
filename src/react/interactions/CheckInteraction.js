import React from 'react'
import { IconButton } from 'transactions-interface-web'

const CheckInteraction = ({ entityName,
  slug
}) => {
  return <IconButton className='button button--alive check-interaction'
    icon='pen'
    href={`/content/${entityName}/${slug}`}
  />
}

export default CheckInteraction
