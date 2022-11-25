import { ChildrenTypes } from '@Types/Children.types'
import { IconNameTypes } from '@Types/Icon.types'
import { MouseEventHandler } from 'react'

type ButtonTypes = 'primary' | 'secondary'

interface ButtonProps {
  className?: string
  type?: ButtonTypes
  icon?: IconNameTypes
  iconColor?: string
  disabled?: boolean
  onClick?: MouseEventHandler
  children?: ChildrenTypes
  to?: string
}

export default ButtonProps
