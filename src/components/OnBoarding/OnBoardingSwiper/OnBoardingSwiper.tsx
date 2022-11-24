import { A11y, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/effect-fade'
import 'swiper/scss/pagination'

import OnBoardingContent from '@Components/OnBoarding/OnBoardingContent'

import onboarding from '@Assets/images/onboarding'

import './OnBoardingSwiper.scss'
import OnBoardingSwiperProps from './OnBoardingSwiper.types'

function OnBoardingSwiper({
  onSwiperImageHandler,
  onSwiperTextHandler,
  setSwiperActiveIndex,
}: OnBoardingSwiperProps) {
  const slides = [
    {
      id: 0,
      image: onboarding.Auth,
      title: 'Сканируйте ЭКГ',
      text: `Авторизируйтесь и создавайте профили для своих близких, 
      настраивая уровень заботы`,
    },
    {
      id: 1,
      image: onboarding.Medications,
      title: 'Изучайте теорию',
      text: `Авторизируйтесь и создавайте профили для своих близких, 
      настраивая уровень заботы`,
    },
    {
      id: 2,
      image: onboarding.Reports,
      title: 'Соревнуйтесь с друзьями',
      text: `Авторизируйтесь и создавайте профили для своих близких, 
      настраивая уровень заботы`,
    },
  ]

  return (
    <>
      <Swiper
        className="onboarding__swiper"
        // install Swiper modules
        modules={[A11y, EffectFade]}
        onSwiper={onSwiperImageHandler}
        onActiveIndexChange={(swiper) => setSwiperActiveIndex(swiper.activeIndex)}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <OnBoardingContent image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="onboarding__swiper"
        // install Swiper modules
        modules={[Pagination, A11y]}
        onSwiper={onSwiperTextHandler}
        onActiveIndexChange={(swiper) => setSwiperActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        pagination
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <OnBoardingContent
              title={slide.title}
              text={slide.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default OnBoardingSwiper
