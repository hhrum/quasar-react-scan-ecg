import classnames from 'classnames'
import './Typography.scss'
import TypographyProps from './Typography.types'

function Typography({ variant, color, className, children }: TypographyProps) {
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

Typography.defaultProps = {
  variant: 'heading-h1',
  color: null,
  className: null,
  children: null,
}

export default Typography
