type AlignTypes = 'flex-start' | 'center' | 'flex-end' | 'stretch'

type DirectionTypes = 'column' | 'row'

interface GroupProps {
  className?: string
  contentClassName?: string
  style?: React.CSSProperties

  header?: JSX.Element | JSX.Element[] | string
  children?: JSX.Element | JSX.Element[] | string

  align?: AlignTypes
  direction?: DirectionTypes

  noPadding?: boolean
  noContentPadding?: boolean
  noContentGap?: boolean
}

export default GroupProps
