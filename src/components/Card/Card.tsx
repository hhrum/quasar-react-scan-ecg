import classNames from 'classnames'
import React, { ReactNode } from 'react'

import Icon from '@UIkit/Icon'
import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import CardProps from './Card.types'

import './Card.scss'

function Card({ image, name, textDate, className, isBigCard }: CardProps) {
  const cardClass = classNames(
    'card',
    {
      'card--big': isBigCard,
    },
    className,
  )

  let imageContent = <div className="card__empty-image" />
  if (image) {
    const ImageComponent = image
    imageContent = <ImageComponent className="card__image" />
  }

  let dateContent = null
  if (isBigCard && textDate) {
    dateContent = (
      <Typography
        className="card__date"
        variant="text-t2"
        color={colors.secondaryDark02}
      >
        {textDate}
      </Typography>
    )
  }

  return (
    <div className={cardClass}>
      <div className="card__image-wrapper">
        {imageContent}
        <Icon
          className="card__icon"
          iconName="heartDefault"
        />
      </div>

      <Typography
        className="card__name"
        variant="text-t1-bold"
      >
        {name}
      </Typography>

      {dateContent}
    </div>
  )
}

Card.defaultProps = {
  image: null,
  textDate: null,

  className: null,
  isBigCard: false,
}

export default Card
