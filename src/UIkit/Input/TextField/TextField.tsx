import classnames from 'classnames'
import { SetStateAction, useState } from 'react'

import TextFieldProps from '@UIkit/Input/TextField/TextField.types'
import Typography from '@UIkit/Typography'

import './TextField.scss'

function TextField({ className, text, value, setValue }: TextFieldProps) {
  const [placeholderOnTop, setPlaceholderOnTop] = useState(false)
  const inputFieldClaasName = classnames('input__text-field', className)
  const placeholderClassName = classnames('input__placeholder', {
    'input__placeholder--top': placeholderOnTop,
  })
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
    <div className="input">
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
        {text}
      </Typography>
    </div>
  )
}

TextField.defaultProps = {
  className: '',
  text: '',
  value: '',
  setValue: () => null,
}

export default TextField
