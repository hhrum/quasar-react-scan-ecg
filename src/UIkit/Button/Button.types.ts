import { MouseEventHandler } from 'react'

type ButtonTypes = 'primary' | 'secondary'

interface ButtonProps {
  className?: string
  type?: ButtonTypes
  icon?: any
  disabled?: boolean
  onClick?: MouseEventHandler
  children?: JSX.Element | JSX.Element[] | string
  to?: string
}

export default ButtonProps
