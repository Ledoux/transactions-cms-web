import React from 'react'
import { getIsEditOrNewNotBlock } from 'transactions-cms-state'
import { getLocationSearchString } from 'transactions-interface-state'

// function should return true if you want to continue next
export const handleBeforeNavigation = ({ props: { BlockComponent,
  search,
  showModal,
  slug
}}, { nextLocation,
  nextSearch
}) => {
  // special check for website when we are in new or edit mode
  const isNotBlock = getIsEditOrNewNotBlock(Object.assign({
    isNew: slug === 'new'}, search), nextSearch)
  if (isNotBlock === false) {
    // careful we MUTATE HERE
    nextSearch.isForcingLocationChange = 'true'
    // showModal
    showModal(<BlockComponent
      icon='warning'
      subtext='You are still editing some content'
      text='Are you sure you want to leave this page ?'
      nextLocation={{ pathname: nextLocation.pathname,
        search: getLocationSearchString(nextSearch),
        state: nextLocation.state
      }}
    />)
    return false
  }
  return true
}
