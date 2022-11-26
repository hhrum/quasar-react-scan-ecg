import { IconPathType } from './iconsPaths'

type IconNameType = keyof IconPathType

interface IconProps {
  className?: string

  iconName: IconNameType
  color?: string
  size?: number
}

export default IconProps
