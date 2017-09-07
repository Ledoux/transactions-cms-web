import React from 'react'
import { Title } from 'transactions-interface-web'

import Explore from '../components/Explore'

const usersExploreOptions = [{ collectionName: 'users',
  maxDisplayCount: 3,
  // RightInteractionComponent: UserInteraction
}]

const AdminDashboard = props => {
  return (<div className='admin-dashboard'>
    <p className='admin-dashboard__title'>
      This is the admin dashboard!
    </p>
    <div className='admin-dashboard__users'>
      <Title icon='experts' text='USERS' />
      <Explore getRequestQuery={query => {
          // attributes in the user objects
          // are contained into the nested local object
          const requestQuery = {}
          Object.keys(query)
            .forEach(queryKey => {
              const requestQueryKey = queryKey.replace(/_in_/g, '')
                .replace('_or_', '_or__in_local.')
                .replace(/_OR_/g, '_OR__in_local.')
              requestQuery[requestQueryKey] = query[queryKey]
            })
          return requestQuery
        }}
        inputTemplate='_or__in_firstName_OR__in_lastName_OR__in_email:{{value}}'
        isAdd
        label='admin-users'
        options={usersExploreOptions}
        placeholder='search for users'
      />
    </div>
  </div>)
}

export default AdminDashboard
