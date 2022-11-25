import { IconNameTypes } from '@Types/Icon.types'

interface HeaderButtonProps {
  className: string

  icon: IconNameTypes
  color: string
  onClick: () => void

  to: string
  goBack: boolean
}

export default HeaderButtonProps
