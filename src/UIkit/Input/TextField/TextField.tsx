import classnames from 'classnames'
import { ChangeEvent, useState } from 'react'

import Typography from '@UIkit/Typography'

import './TextField.scss'
import TextFieldProps from './TextField.types'

function TextField({ className, placeholder, value, setValue }: TextFieldProps) {
  const [placeholderOnTop, setPlaceholderOnTop] = useState(false)
  const InputFieldClassName = classnames('text-field', className)
  const TextFieldClaasName = classnames('text-field__input', {
    'text-field__input--top': placeholderOnTop,
  })
  const placeholderClassName = classnames('text-field__placeholder', {
    'text-field__placeholder--top': placeholderOnTop,
  })
  if (value && !placeholderOnTop) {
    setPlaceholderOnTop((prevState) => !prevState)
  }
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value)
    }
  }
  const focusHandler = () => {
    if (!value) {
      setPlaceholderOnTop((prevState) => !prevState)
    }
  }
  const blurHandler = () => {
    if (!value) {
      setPlaceholderOnTop((prevState) => !prevState)
    }
  }
  return (
    <div className={InputFieldClassName}>
      <input
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        className={TextFieldClaasName}
        type="text"
      />
      <Typography
        className={placeholderClassName}
        variant="text-t1-bold"
      >
        {placeholder}
      </Typography>
    </div>
  )
}

TextField.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
  setValue: () => null,
}

export default TextField
