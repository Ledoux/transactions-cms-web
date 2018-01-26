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
  ContentComponent,
  contents,
  controlIndex,
  className,
  elementId,
  explore,
  index,
  isFrozen,
  onAddClick,
  onDeleteClick,
  onSetClick,
  shortJoinKey,
  tag
}) => {
  const contentElements = []
  if (isFrozen) {
    if (content) {
      contentElements.push(
        <ContentComponent key={0} {...content}/>
      )
    } else if (contents) {
      contents.forEach((content, index) =>
        contentElements.push(
          <ContentComponent key={index} {...content} />
        )
      )
    }
  } else if (content) {
    contentElements.push(
      <div className='join-form__content'
        key={0}
        onClick={() => activeClickListener(0)}
      >
        <ContentComponent {...content} />
      </div>
    )
  } else if (contents) {
    contents.forEach((content, index) => {
      contentElements.push(
        <div className='join-form__content'
          key={index}
          onClick={() => activeClickListener(index)}
        >
          <ContentComponent {...content} />
        </div>
      )
    })
    contentElements.push(
      <Button key='add' onClick={() => onAddClick(contents.length)} >
        Add {shortJoinKey}
      </Button>
    )
  } else {
    contentElements.push(
      <Button key='set' onClick={onSetClick}>
        {shortJoinKey}
      </Button>
    )
  }
  contentElements.push(
    //<Portal node={document && document.getElementById(elementId)} key='portal'>
      <div key='explore' className={classnames('join-form__replace', {
        'join-form__replace--hidden': controlIndex === null
      })}>
        <Button onClick={onDeleteClick} >
          Delete {shortJoinKey}
        </Button>
        <ExploreTask {...explore} />
      </div>
    //</Portal>
  )
  return (
    <div className={className || 'join-form'} id={elementId}>
      {contentElements}
    </div>
  )
}

export default withState(JoinForm)
