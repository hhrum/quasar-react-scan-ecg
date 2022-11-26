import classnames from 'classnames'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import NumberFieldProps from '@UIkit/Input/NumberField/NumberField.types'

import icons from '@Assets/images/icons'

import './NumberField.scss'

function NumberField({ className, tel, minLength, maxLength }: NumberFieldProps) {
  const NumberFieldClassName = classnames('number-field', className)
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    mode: 'onChange',
  })
  useEffect(() => {
    if (!getValues('Numbers') && tel) {
      setValue('Numbers', '+7')
    }
  }, [getValues, setValue, tel])
  const getInitialState = () => {
    if (!getValues('Numbers') && tel) {
      setValue('Numbers', '+7')
    }
  }
  const SuccessIcon = icons.Check
  const MarkIcon = icons.Xmark
  return (
    <div className={NumberFieldClassName}>
      {tel ? (
        <input
          className="number-field__input"
          type="tel"
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...register('Numbers', {
            minLength: 11,
            pattern: /^(\+7|7|8)?\(?[489][0-9]{2}\)?[0-9]{3}?[0-9]{2}?[0-9]{2}$/,
          })}
          onFocus={getInitialState}
        />
      ) : (
        <input
          className="number-field__input"
          type="tel"
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...register('Numbers', {
            minLength,
            maxLength,
            pattern: /^[0-9]+$/,
          })}
        />
      )}
      {/* eslint-disable-next-line no-nested-ternary */}
      {errors?.Numbers ? (
        <div className="number-field__icon">
          <MarkIcon />
        </div>
      ) : !getValues('Numbers') ? (
        <div />
      ) : (
        <div className="number-field__icon">
          <SuccessIcon />
        </div>
      )}
    </div>
  )
}

NumberField.defaultProps = {
  className: '',
  tel: false,
  minLength: 1,
  maxLength: 1,
}

export default NumberField
