import { MouseEventHandler } from 'react'

import { IconType } from '@Assets/images/icons'

type ButtonTypes = 'primary' | 'secondary'

interface ButtonProps {
  className?: string
  type?: ButtonTypes
  icon?: IconType
  disabled?: boolean
  onClick?: MouseEventHandler
  children?: JSX.Element | JSX.Element[] | string
  to?: string
}

export default ButtonProps
