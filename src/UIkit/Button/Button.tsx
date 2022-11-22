import classnames from 'classnames'

import ButtonProps from '@UIkit/Button/Button.types'
import Typography from '@UIkit/Typography'

import './Button.scss'

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
    <div className="wrapper-button">
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
    </div>
  )
}

Button.defaultProps = {
  className: '',
  type: 'primary',
  icon: null,
  disabled: false,
  onClick: () => null,
  children: '',
}

export default Button
