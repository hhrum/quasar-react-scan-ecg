import classnames from 'classnames'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Icon from '@UIkit/Icon'

import colors from '@Assets/styles/colors'

import './NumberField.scss'
import NumberFieldProps from './NumberField.types'

function NumberField({ className, tel, minLength, maxLength }: NumberFieldProps) {
  const InputFieldClassName = classnames('number-field', className)
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
  if (tel) {
    return (
      <div className={InputFieldClassName}>
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
        {errors?.Numbers ? (
          <div className="number-field__icon">
            <Icon
              iconName="xmark"
              color={colors.secondaryError}
            />
          </div>
        ) : (
          <div className="number-field__icon">
            <Icon
              iconName="check"
              color={colors.secondarySuccess}
            />
          </div>
        )}
        {!getValues('Numbers') && <div className="number-field__empty-icon" />}
      </div>
    )
  }
  return (
    <div className={InputFieldClassName}>
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
      {errors?.Numbers ? (
        <div className="number-field__icon">
          <Icon
            iconName="xmark"
            color={colors.secondaryError}
          />
        </div>
      ) : (
        <div className="number-field__icon">
          <Icon
            iconName="check"
            color={colors.secondarySuccess}
          />
        </div>
      )}
      {!getValues('Numbers') && <div className="number-field__empty-icon" />}
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
