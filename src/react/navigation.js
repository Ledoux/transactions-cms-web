import React from 'react'
import { getIsEditOrNewNotBlock } from 'transactions-cms-state'
import { getLocationSearchString } from 'transactions-interface-state'

// function should return true if you want to continue next
export const handleBeforeNavigation = ({ availableModes,
  BlockComponent,
  nextSearch,
  pathname,
  push,
  search,
  showModal,
  slug
}) => {
  // special check for website when we are in new or edit mode
  const isNotBlock = getIsEditOrNewNotBlock(Object.assign({
    isNew: slug === 'new'}, search), nextSearch)
  if (isNotBlock === false) {
    nextSearch.isForcingLocationChange = 'true'
    showModal(<BlockComponent
      icon='warning'
      subtext='You are still editing some content'
      text='Are you sure you want to leave this page ?'
      nextLocation={{ pathname: location.pathname,
        search: getLocationSearchString(nextSearch),
        state: location.state
      }}
    />, {
      beforeCloseModal: () => {
        push('/home')
      }
    })
    return isNotBlock
  }
  return true
}
