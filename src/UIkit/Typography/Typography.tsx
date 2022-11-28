import classnames from 'classnames'

import TypographyProps from './Typography.types'

import './Typography.scss'

function Typography({ className, variant = 'text-t1', color, children }: TypographyProps) {
  const typographyClass = classnames('typography', `typography--${variant}`, className)
  const typographyStyle: React.CSSProperties = {}

  if (color) {
    typographyStyle.color = color
  }

  return (
    <p
      className={typographyClass}
      style={typographyStyle}
    >
      {children}
    </p>
  )
}

export default Typography
