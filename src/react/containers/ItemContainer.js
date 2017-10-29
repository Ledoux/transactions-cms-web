import classnames from 'classnames'
import React from 'react'
import { ItemContainer as withState } from 'transactions-cms-state'

const ItemContainer = props => {
  const { BottomInteractionComponent,
    className,
    collectionName,
    ContentComponent,
    entity,
    entityName,
    exploreState,
    extraProps,
    interactionExtraProps,
    isLast,
    isShrinked,
    isSmall,
    LeftInteractionComponent,
    onExploreChange,
    RightInteractionComponent,
    text
  } = props
  return (
    <div className={classnames(className || `item-container item-container--${entityName}`, {
      'item-container--shrinked': isShrinked,
      'item-container--shrinked--last': isShrinked && isLast,
      'item-container--small': isSmall})} >
      {
        LeftInteractionComponent && (
          <div className={classnames('item-container__left-interaction col', {
              'item-container__left-interaction--shrinked': isShrinked
            })}>
            <LeftInteractionComponent collectionName={collectionName}
              entityName={entityName}
              exploreState={exploreState}
              onExploreChange={onExploreChange}
              {...entity}
              {...interactionExtraProps} />
          </div>
        )
      }
      <div className={classnames('item-container__content', {
        'col': LeftInteractionComponent,
        'item-container__content--text flex items-center': text })}>
        { ContentComponent && <ContentComponent {...entity} {...extraProps} /> }
        {
          text && (
            <p className='item-container__content__text'>
              {text}
            </p>
          )
        }
      </div>
      {
        RightInteractionComponent && (
          <div className={classnames('item-container__right-interaction ', {
              'item-container__right-interaction--shrinked': isShrinked
            })}>
            <RightInteractionComponent collectionName={collectionName}
              entityName={entityName}
              exploreState={exploreState}
              onExploreChange={onExploreChange}
              {...entity}
              {...interactionExtraProps} />
          </div>
        )
      }
      {
        BottomInteractionComponent && (
          <div className='item-container__bottom-interaction'>
            <BottomInteractionComponent collectionName={collectionName}
              entityName={entityName}
              exploreState={exploreState}
              onExploreChange={onExploreChange}
              {...entity}
              {...interactionExtraProps} />
          </div>
        )
      }
    </div>
  )
}

export default withState(ItemContainer)
