import classnames from 'classnames'
import { SetStateAction, useState } from 'react'

import TextFieldProps from '@UIkit/Input/TextField/TextField.types'
import Typography from '@UIkit/Typography'

import './TextField.scss'

function TextField({ className, placeholder, value, setValue }: TextFieldProps) {
  const [placeholderOnTop, setPlaceholderOnTop] = useState(false)
  const inputFieldClaasName = classnames(
    'text-field__input',
    {
      'text-field__input--top': placeholderOnTop,
    },
    className,
  )
  const placeholderClassName = classnames('text-field__placeholder', {
    'text-field__placeholder--top': placeholderOnTop,
  })
  if (value && !placeholderOnTop) {
    setPlaceholderOnTop((prevState) => !prevState)
  }
  const changeHandler = (event: { target: { value: SetStateAction<string> } }) => {
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
    <div className="text-field">
      <input
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        className={inputFieldClaasName}
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
