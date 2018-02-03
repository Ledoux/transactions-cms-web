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
  className,
  elementId,
  explore,
  index,
  isFrozen,
  onDeleteClick,
  shortJoinKey,
  showModal,
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
  } else {
    const ExploreComponent = joinIndex => (
      <div key='explore' className='join-form__replace'>
        <Button onClick={() => onDeleteClick(joinIndex)} >
          Delete {shortJoinKey}
        </Button>
        <ExploreTask {...explore} extraOn={{ joinIndex }} />
      </div>
    )
    const exploreConfig = {
      isCornerCloseButton: true,
      isOutCloseButton: true
    }
    if (content) {
      // switch Click
      contentElements.push(
        <div className='join-form__content'
          key={0}
          onClick={() => showModal(ExploreComponent(0), exploreConfig)}
        >
          <ContentComponent {...content} />
        </div>
      )
    } else if (contents) {
      // switch Click
      contents.forEach((content, index) => {
        contentElements.push(
          <div className='join-form__content'
            key={index}
            onClick={() => showModal(ExploreComponent(index), exploreConfig)}
          >
            <ContentComponent {...content} />
          </div>
        )
      })
      // add Click
      contentElements.push(
        <Button key='add' onClick={() =>
          showModal(ExploreComponent(contents.length), exploreConfig)} >
          Add {shortJoinKey}
        </Button>
      )
    } else {
      contentElements.push(
        <Button key='set' onClick={() =>
          showModal(ExploreComponent(0), exploreConfig)}>
          {shortJoinKey}
        </Button>
      )
    }
  }
  return (
    <div className={className || 'join-form'} id={elementId}>
      {contentElements}
    </div>
  )
}

export default withState(JoinForm)
