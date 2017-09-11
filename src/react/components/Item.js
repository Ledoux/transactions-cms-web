import classnames from 'classnames'
import React from 'react'

const Item = props => {
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
    <div className={classnames(className || `item item--${entityName}`, {
      'item--shrinked': isShrinked,
      'item--shrinked--last': isShrinked && isLast,
      'item--small': isSmall
    })}>
      {
        LeftInteractionComponent && (
          <div className={classnames('item__left-interaction col', {
              'item__left-interaction--shrinked': isShrinked
            })}>
            <LeftInteractionComponent
              exploreState={exploreState}
              onExploreChange={onExploreChange}
              {...entity}
              {...interactionExtraProps}
            />
          </div>
        )
      }
      <div className={classnames('item__content', {
        'col': LeftInteractionComponent,
        'item__content--text flex items-center': text })
      }>
        {
          ContentComponent && <ContentComponent
            {...entity}
            {...extraProps}
          />
        }
        {
          text && (
            <p className='item__content__text'>
              {text}
            </p>
          )
        }
      </div>
      {
        RightInteractionComponent && (
          <div className={classnames('item__right-interaction ', {
              'item__right-interaction--shrinked': isShrinked
            })}>
            <RightInteractionComponent
              exploreState={exploreState}
              onExploreChange={onExploreChange}
              {...entity}
              {...interactionExtraProps}
            />
          </div>
        )
      }
      {
        BottomInteractionComponent && (
          <div className='item__bottom-interaction'>
            <BottomInteractionComponent
              exploreState={exploreState}
              onExploreChange={onExploreChange}
              {...entity}
              {...interactionExtraProps}
            />
          </div>
        )
      }
    </div>
  )
}

export default Item
