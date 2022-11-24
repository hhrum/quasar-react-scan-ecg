import { ReactComponent as Check } from './check.svg'
import { ReactComponent as HeartActive } from './heart-active.svg'
import { ReactComponent as HeartDefault } from './heart-default.svg'
import { ReactComponent as NotificationActive } from './notification-active.svg'
import { ReactComponent as NotificationDefault } from './notification-default.svg'
import { ReactComponent as Photo } from './photo.svg'
import { ReactComponent as Play } from './play.svg'
import { ReactComponent as Share } from './share.svg'
import { ReactComponent as Xmark } from './xmark.svg'

const icons = {
  Check,
  HeartActive,
  HeartDefault,
  NotificationActive,
  NotificationDefault,
  Play,
  Photo,
  Share,
  Xmark,
} as const

export default icons

export type IconsKeysType = keyof typeof icons

export type IconType = typeof icons[IconsKeysType]
