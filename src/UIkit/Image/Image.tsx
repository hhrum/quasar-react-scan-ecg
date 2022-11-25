import classnames from 'classnames'

import ImageProps from './Image.types'

function Image({
  className,
  src,
  alt,

  objectFit,
  square,
  width,
  height,
  rounded,
}: ImageProps) {
  const imageClass = classnames('image', className)
  const imageStyle: React.CSSProperties = {
    width,
    height,
    objectFit,
  }

  if (square) {
    imageStyle.maxWidth = square
    imageStyle.width = square
    imageStyle.minWidth = square
    imageStyle.maxHeight = square
    imageStyle.height = square
    imageStyle.minHeight = square
  }

  if (rounded) {
    imageStyle.borderRadius = rounded
  }

  return (
    <img
      src={src}
      alt={alt}
      className={imageClass}
      style={imageStyle}
      loading="lazy"
    />
  )
}

Image.defaultProps = {
  className: '',

  objectFit: 'cover',

  square: null,
  width: null,
  height: null,
  rounded: null,
}

export default Image
