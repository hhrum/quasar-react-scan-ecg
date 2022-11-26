import classNames from 'classnames'

import colors from '@Assets/styles/colors'

import IconProps from './Icon.types'
import iconsPaths from './iconsPaths'

function Icon({ className, iconName, color, size }: IconProps) {
  const iconClass = classNames('icon', className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={{ color }}
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
    >
      {iconsPaths[iconName]}
    </svg>
  )
}

Icon.defaultProps = {
  className: '',

  color: colors.primary,
  size: 24,
}

export default Icon
