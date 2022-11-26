import classnames from 'classnames'

import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import './Button.scss'
import ButtonProps from './Button.types'

function Button({ className, type, icon, disabled, onClick, children }: ButtonProps) {
  const buttonClassName = classnames(
    'button',
    `button--${type}`,
    {
      'button--disabled': disabled,
    },
    className,
  )

  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}

      <Typography
        className="button__text"
        variant="text-t1-bold"
      >
        {children}
      </Typography>
    </button>
  )
}

Button.defaultProps = {
  className: '',
  type: 'primary',
  icon: null,
  iconColor: colors.white,
  disabled: false,
  onClick: () => null,
  children: null,
}

export default Button
