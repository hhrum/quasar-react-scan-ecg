import classnames from 'classnames'

import Typography from '@UIkit/Typography'

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

  const IconComponent = icon

  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <IconComponent />}

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
  disabled: false,
  onClick: () => null,
  children: null,
}

export default Button
