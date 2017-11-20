import React from 'react'
import { ContentPage as withState } from 'transactions-cms-state'

const ContentPage = ({ task, TaskComponent }) => {
  return (
    <main className='main page content-page'>
      <TaskComponent {...task} />
    </main>
  )
}

export default withState(ContentPage)
