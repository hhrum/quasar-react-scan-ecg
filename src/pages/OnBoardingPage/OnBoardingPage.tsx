import { useCallback, useEffect, useState } from 'react'
import Swiper from 'swiper'

import OnBoardingSwiper from '@Components/OnBoarding/OnBoardingSwiper'

import Button from '@UIkit/Button'
import Group from '@UIkit/Groups/Group'

import PageLayout from '@Layouts/PageLayout'

import './OnBoardingPage.scss'

function OnBoardingPage() {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0)
  const [swiperImage, setSwiperImage] = useState<Swiper | null>(null)
  const [swiperText, setSwiperText] = useState<Swiper | null>(null)

  const onSwiperImageHandler = useCallback((swiperInstance: Swiper) => {
    setSwiperImage(swiperInstance)
  }, [])
  const onSwiperTextHandler = useCallback((swiperInstance: Swiper) => {
    setSwiperText(swiperInstance)
  }, [])

  useEffect(() => {
    if (!swiperText || !swiperImage) {
      return
    }
    swiperImage.slideTo(swiperActiveIndex)
    swiperText.slideTo(swiperActiveIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperActiveIndex])

  let button = (
    <Button
      onClick={() => {
        if (!swiperImage || !swiperText) {
          return
        }

        swiperImage.slideNext()
        swiperText.slideNext()
      }}
    >
      Продолжить
    </Button>
  )

  if (swiperImage?.isEnd) {
    button = <Button to="/auth">Начать пользоваться</Button>
  }

  return (
    <PageLayout contentClassName="onboarding__content">
      <div className="onboarding__swiper-wrap">
        <OnBoardingSwiper
          onSwiperImageHandler={onSwiperImageHandler}
          onSwiperTextHandler={onSwiperTextHandler}
          setSwiperActiveIndex={setSwiperActiveIndex}
        />
      </div>

      <Group>{button}</Group>
    </PageLayout>
  )
}

export default OnBoardingPage
