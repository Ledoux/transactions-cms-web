import classnames from 'classnames'
import React from 'react'
import { ItemDecorator as withState } from 'transactions-cms-state'

const ItemDecorator = props => {
  const { BottomInteractionComponent,
    className,
    content,
    ContentComponent,
    entityName,
    isLast,
    isShrinked,
    isSmall,
    LeftInteractionComponent,
    RightInteractionComponent,
    text
  } = props
  console.log('AAA', content)
  return (
    <div className={classnames(className || `item-decorator item-decorator--${entityName}`, {
      'item-decorator--shrinked': isShrinked,
      'item-decorator--shrinked--last': isShrinked && isLast,
      'item-decorator--small': isSmall})} >
      {
        LeftInteractionComponent && (
          <div className={classnames('item-decorator__left-interaction col', {
              'item-decorator__left-interaction--shrinked': isShrinked
            })}>
            <LeftInteractionComponent {...content} />
          </div>
        )
      }
      <div className={classnames('item-decorator__content', {
        'col': LeftInteractionComponent,
        'item-decorator__content--text flex items-center': text })}>
        { ContentComponent && <ContentComponent {...content} /> }
        {
          text && (
            <p className='item-decorator__content__text'>
              {text}
            </p>
          )
        }
      </div>
      {
        RightInteractionComponent && (
          <div className={classnames('item-decorator__right-interaction ', {
              'item-decorator__right-interaction--shrinked': isShrinked
            })}>
            <RightInteractionComponent {...content} />
          </div>
        )
      }
      {
        BottomInteractionComponent && (
          <div className='item-decorator__bottom-interaction'>
            <BottomInteractionComponent {...content} />
          </div>
        )
      }
    </div>
  )
}

export default withState(ItemDecorator)
