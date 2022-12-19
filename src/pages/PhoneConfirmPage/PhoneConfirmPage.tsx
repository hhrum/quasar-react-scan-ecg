import { useEffect, useMemo, useState } from 'react'

import Header from '@Components/HeaderComponents/Header'
import HeaderButton from '@Components/HeaderComponents/HeaderButton'

import Group from '@UIkit/Groups/Group'
import NumberField from '@UIkit/Input/NumberField'
import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import PageLayout from '@Layouts/PageLayout'

import './PhoneConfirmPage.scss'

function PhoneConfirmPage() {
  const [time, setTime] = useState(15)
  const [isCounting, setIsCounting] = useState(true)
  const getStringTime = (timeSeconds: number) => {
    if (timeSeconds.toString().length === 1) {
      return `0${timeSeconds.toString()}`
    }
    return timeSeconds.toString()
  }
  const minutes = Math.floor(time / 60)
  const seconds = getStringTime(Math.floor(time - minutes * 60))
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((prevState) => (prevState >= 0 ? prevState - 1 : 0))
    }, 1000)
    if (time === 0) {
      setIsCounting(false)
    }
    return () => clearInterval(timeInterval)
  }, [time])
  const getDefaultTime = () => {
    setIsCounting(true)
    setTime(15)
  }
  const header = useMemo(
    () => (
      <Header
        leftSideSlot={
          <HeaderButton
            className="phone-confirm-page__header-button"
            icon="chevronLeft"
          />
        }
      />
    ),
    [],
  )
  return (
    <PageLayout
      header={header}
      contentClassName="phone-confirm-page"
    >
      <Group contentClassName="phone-confirm-page__content">
        <Typography
          className="phone-confirm-page__title"
          variant="heading-h1"
        >
          Проверочный код
        </Typography>
        <Typography
          className="phone-confirm-page__phone-title"
          variant="text-t3"
        >
          Мы отправили код на номер +7(999) 999-99-99
        </Typography>
        <NumberField
          className="phone-confirm-page__code-input"
          minLength={4}
          maxLength={4}
        />
        {isCounting ? (
          <Typography
            className="phone-confirm-page__subtitle"
            variant="text-t3"
            color={colors.secondaryDark02}
          >
            <>
              До повторной отправки кода осталось
              <span className="phone-confirm-page__timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
              </span>
            </>
          </Typography>
        ) : (
          <button
            className="phone-confirm-page__resend-button"
            type="button"
            onClick={getDefaultTime}
          >
            <Typography
              className="phone-confirm-page__subtitle"
              variant="text-t3"
              color={colors.primary}
            >
              Отправить код повторно
            </Typography>
          </button>
        )}
      </Group>
    </PageLayout>
  )
}

export default PhoneConfirmPage
