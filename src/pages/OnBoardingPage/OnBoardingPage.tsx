import { useRef, useState } from 'react'

import Group from '@Components/Groups/Group'
import OnBoardingSwiper from '@Components/OnBoarding/OnBoardingSwiper'

import Button from '@UIkit/Button'

import PageLayout from '@Layouts/PageLayout'

import './OnBoardingPage.scss'

function OnBoardingPage() {
  const [isLastSlide, setIsLastSlide] = useState(false)
  const swiperRef = useRef(null) as any

  let button = (
    <Button
      onClick={() => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex + 1)
        }
      }}
    >
      Продолжить
    </Button>
  )

  if (isLastSlide) {
    button = <Button to="/auth">Начать пользоваться</Button>
  }

  return (
    <PageLayout contentClassName="onboarding__content">
      <div className="onboarding__swiper-wrap">
        <OnBoardingSwiper
          swiperRef={swiperRef}
          setIsLastSlide={setIsLastSlide}
        />
      </div>

      <Group>{button}</Group>
    </PageLayout>
  )
}

export default OnBoardingPage
