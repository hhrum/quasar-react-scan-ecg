import React, { SetStateAction } from 'react'

interface TextFieldProps {
  className?: string
  text?: string
  value?: string
  setValue?: React.Dispatch<SetStateAction<string>>
}

export default TextFieldProps
