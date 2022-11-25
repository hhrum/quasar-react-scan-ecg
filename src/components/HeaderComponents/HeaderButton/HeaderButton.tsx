import classnames from 'classnames'

import Icon from '@UIkit/Icon'

import colors from '@Assets/styles/colors'

import './HeaderButton.scss'
import HeaderButtonProps from './HeaderButton.types'

function HeaderButton({
  className,

  icon,
  color,
}: HeaderButtonProps) {
  const HeaderButtonClassName = classnames('header-button', className)

  return (
    <div className={HeaderButtonClassName}>
      <Icon
        iconName={icon}
        color={color}
      />
    </div>
  )
}

HeaderButton.defaultProps = {
  className: '',

  icon: 'xmark',
  color: colors.primary,
}

export default HeaderButton
