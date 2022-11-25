import classnames from 'classnames'

import CustomLink from '@UIkit/CustomLink'
import Icon from '@UIkit/Icon'

import icons from '@Assets/images/icons'
import colors from '@Assets/styles/colors'

import './HeaderButton.scss'
import HeaderButtonProps from './HeaderButton.types'

function HeaderButton({
  className,

  icon,
  color,
  onClick,

  to,
  goBack,
}: HeaderButtonProps) {
  const HeaderButtonClassName = classnames('header-button', className)

  return (
    <CustomLink
      className={HeaderButtonClassName}
      onClick={onClick}
      to={to}
      goBack={goBack}
    >
      <Icon
        icon={icon}
        color={color}
      />
    </CustomLink>
  )
}

HeaderButton.defaultProps = {
  className: '',

  icon: icons.Xmark,
  color: colors.primary,
  onClick: () => null,

  to: null,

  goBack: false,
}

export default HeaderButton
