import classnames from 'classnames'
import React from 'react'
import { Portal } from 'react-portal'
import { JoinForm as withState } from 'transactions-cms-state'
import { ExploreTask } from 'transactions-cms-web'
import { Button } from 'transactions-interface-web'

import ControlBar from '../components/ControlBar'

const JoinForm = ({ activeClickListener,
  collectionName,
  content,
  contents,
  controlIndex,
  className,
  divId,
  explore,
  index,
  isFrozen,
  ContentComponent,
  tag
}) => {
  let contentElements
  if (isFrozen) {
    contentElements = content
      ? [<ContentComponent key={0} {...content} />]
      : contents && contents.map((content, index) =>
        <ContentComponent key={index} {...content} />)
  } else {
    contentElements = content
      ? [
          <div className='join-form__content'
            key={0}
            onClick={() => activeClickListener(0)}
          >
            <ContentComponent {...content} />
          </div>
        ]
      : contents && contents.map((content, index) => (
        <div className='join-form__content'
          key={index}
          onClick={() => activeClickListener(index)}
        >
          <ContentComponent {...content} />
        </div>
      ))
    if (contentElements) {
      contentElements.push(
        <Portal node={document && document.getElementById(divId)} key='portal'>
          <div className={classnames('join-form__replace', {
            'join-form__replace--hidden': controlIndex === null
          })}>
            <ExploreTask {...explore} />
          </div>
        </Portal>
      )
    }
  }
  return (
    <div className={className || 'join-form'} id={divId}>
      {contentElements}
    </div>
  )
}

export default withState(JoinForm)
