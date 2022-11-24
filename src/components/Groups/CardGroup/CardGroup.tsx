import classNames from 'classnames'

import Group from '@Components/Groups/Group'

import Typography from '@UIkit/Typography'

import './CardGroup.scss'
import CardGroupProps from './CardGroup.types'

function CardGroup({ className, style, header, children }: CardGroupProps) {
  const CardGroupClassName = classNames('card-group', className)

  return (
    <Group
      className={CardGroupClassName}
      contentClassName="card-group__content"
      style={style}
      header={<Typography variant="heading-h2">{header}</Typography>}
      noContentGap
    >
      {children}
    </Group>
  )
}

CardGroup.defaultProps = {
  className: '',
  style: null,

  header: null,
  children: null,
}

export default CardGroup
