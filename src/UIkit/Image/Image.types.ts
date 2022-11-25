type ObjectFitTypes = 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'

interface ImageProps {
  className?: string
  src: string
  alt: string

  objectFit?: ObjectFitTypes
  square?: string
  width?: string
  height?: string
  rounded?: string
}

export default ImageProps
