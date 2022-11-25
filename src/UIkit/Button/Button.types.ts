import { ElementTypes } from '@Types/Element.types'
import { MouseEventHandler } from 'react'

type ButtonTypes = 'primary' | 'secondary'

interface ButtonProps {
  className?: string
  type?: ButtonTypes
  icon?: JSX.Element
  iconColor?: string
  disabled?: boolean
  onClick?: MouseEventHandler
  children?: ElementTypes
  to?: string
}

export default ButtonProps
