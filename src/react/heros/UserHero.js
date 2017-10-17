import React from 'react'
import { UserHero as withState } from 'transactions-cms-state'
import { Avatar } from 'transactions-interface-web'

import InputForm from '../forms/InputForm'

export const UserHero = props => {
  const { children,
    id,
    email,
    firstName,
    lastName,
    imageUrl,
    isFrozen
  } = props
  return (
    <div className='user-hero'>
      <div className='user-hero__illustration md-col md-col-3'>
        <Avatar className='avatar user-hero__illustration__avatar'
          id={id}
          imageUrl={imageUrl}
          itemProp='image' />
      </div>
      <div className='user-hero__content md-col md-col-5'>
        <div className='user-hero__content__name'>
          <InputForm className='input-form user-hero__content__name__first md-col'
            collectionName='users'
            entityId={id}
            isFrozen={isFrozen}
            label='First Name'
            name='local.firstName'
            initialValue={firstName || ''}
            valueItemProp='givenName' />
          <InputForm className='input-form user-hero__content__name__last md-col'
            collectionName='users'
            entityId={id}
            isFrozen={isFrozen}
            label='Last Name'
            name='local.lastName'
            initialValue={lastName || ''}
            valueItemProp='familyName' />
        </div>
        <div className='user-hero__content__email'>
          <InputForm className='input-form user-hero__content__email'
            collectionName='users'
            entityId={id}
            isFrozen={isFrozen}
            label='Email'
            name='local.email'
            initialValue={email || ''}
            valueItemProp='email' />
        </div>
        <div className='user-hero__content__add'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default withState(UserHero)
