import { IconPathType } from './iconsPaths'

type IconNameType = keyof IconPathType

interface IconProps {
  iconName: IconNameType
  color?: string
  size?: number
  className?: string
}

export default IconProps
