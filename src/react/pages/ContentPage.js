import React from 'react'
import { ContentPage as withState } from 'transactions-cms-state'

import Explore from '../tasks/Explore'
import Travel from '../tasks/Travel'

const ContentPage = ({ options,
  slug
}) => {
  return (
    <main className='main page content-page'>
      {
        slug
        ? <Travel options={options} slug={slug} />
        : <Explore options={options} />
      }
    </main>
  )
}

export default withState(ContentPage)
