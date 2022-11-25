import classnames from 'classnames'

import './Icon.scss'
import IconProps from './Icon.types'

function Icon({ className, icon, color, circle }: IconProps) {
  const iconClass = classnames(
    'icon',
    {
      'icon--circle': circle,
    },
    className,
  )
  const iconStyle: React.CSSProperties = {}

  if (color) {
    iconStyle.color = color
  }

  const IconComponent = icon

  return (
    <div
      className={iconClass}
      style={iconStyle}
    >
      <IconComponent className="icon__image" />
    </div>
  )
}

Icon.defaultProps = {
  className: '',
  color: null,
  circle: false,
}

export default Icon
