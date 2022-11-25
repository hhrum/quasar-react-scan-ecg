import { ChildrenTypes } from 'src/types/Children.types'

type TypographyVariants =
  | 'heading-h1'
  | 'heading-h2'
  | 'heading-h3'
  | 'text-t2'
  | 'text-t2-bold'
  | 'text-t1'
  | 'text-t1-bold'

interface TypographyProps {
  className?: string
  color?: string
  children?: ChildrenTypes
  variant?: TypographyVariants
}

export default TypographyProps
