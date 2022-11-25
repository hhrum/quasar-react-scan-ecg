import { IconType } from '@Assets/images/icons'

interface HeaderButtonProps {
  className: string

  icon: IconType
  color: string
  onClick: () => void

  to: string
  goBack: boolean
}

export default HeaderButtonProps
