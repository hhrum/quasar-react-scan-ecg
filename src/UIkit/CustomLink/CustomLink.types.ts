import { ChildrenTypes } from 'src/types/Children.types'

interface CustomLinkProps {
  className?: string
  children?: ChildrenTypes

  onClick?: () => void

  to?: string
  delay?: number

  goBack?: boolean
}

export default CustomLinkProps
