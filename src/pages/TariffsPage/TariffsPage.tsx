import { useCallback, useMemo, useState } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Header from '@Components/HeaderComponents/Header'
import HeaderButton from '@Components/HeaderComponents/HeaderButton'

import Button from '@UIkit/Button'
import Group from '@UIkit/Groups/Group'
import Icon from '@UIkit/Icon'
import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import PageLayout from '@Layouts/PageLayout'

import './TariffsPage.scss'

const tariffs = [
  {
    id: 1,
    title: 'Базовый тариф',
    advantages: ['2 расшифровки ЭКГ', 'Изучение теории', 'Решение тестов', 'Тренажёр'],
  },
  {
    id: 2,
    title: 'Оптимальный тариф',
    advantages: ['5 расшифровки ЭКГ', 'Изучение теории', 'Решение тестов', 'Тренажёр'],
  },
  {
    id: 3,
    title: 'Тариф для ЛПУ',
    advantages: ['Безлимитные расшифровки', 'Изучение теории', 'Решение тестов', 'Тренажёр'],
  },
]

function TariffsPage() {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [buttonIndex, setButtonIndex] = useState(0)
  const header = useMemo(
    () => (
      <Header
        leftSideSlot={
          <HeaderButton
            icon="xmark"
            color={colors.secondaryDark03}
          />
        }
        rightSideSlot={
          <Typography
            className="tariffs-page__header-text"
            variant="text-t1"
            color={colors.secondaryDark02}
          >
            Восстановить
          </Typography>
        }
      />
    ),
    [],
  )
  const footer = useMemo(() => <Button>Подписаться</Button>, [])
  const handelSlideTo = useCallback(
    (index: number) => {
      if (swiper) {
        swiper.slideTo(index)
      }
      setButtonIndex(index)
    },
    [swiper],
  )
  const generateSwiperButton = useCallback(
    (index: number, durationText: string, price: number) => (
      <button
        type="button"
        className={`tariffs-page__button${buttonIndex === index ? '--active' : ''}`}
        onClick={() => handelSlideTo(index)}
      >
        <div className="tariffs-page__button-text">
          <span>
            <b>{durationText}</b>
          </span>
          <span>{price} ₽</span>
        </div>
        {buttonIndex === index && <Icon iconName="subscribeCheck" />}
      </button>
    ),
    [buttonIndex, handelSlideTo],
  )
  return (
    <PageLayout
      header={header}
      footer={footer}
      contentClassName="tariffs-page__content"
      footerClassName="tariffs-page__footer"
    >
      <Group>
        <Swiper
          className="tariffs-page__slide"
          modules={[Pagination]}
          pagination={{ clickable: false }}
          allowTouchMove={false}
          onSwiper={setSwiper}
        >
          {tariffs.map((elem) => (
            <SwiperSlide key={elem.id}>
              <div className="tariffs-page__slide-image" />
              <Typography
                variant="heading-h2"
                className="tariffs-page__slide-title"
              >
                {elem.title}
              </Typography>
              <div className="tariffs-page__description-wrapper">
                {elem.advantages.map((advantage, index) => (
                  <div
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={index}
                    className="tariffs-page__subtitle-wrapper"
                  >
                    <Icon
                      iconName="check"
                      className="tariffs-page__slide-icon"
                    />
                    <Typography
                      variant="text-t1"
                      className="tariffs-page__slide-subtitle"
                    >
                      {advantage}
                    </Typography>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {generateSwiperButton(0, '1 месяц: ', 200)}
        {generateSwiperButton(1, '1 месяц: ', 350)}
        {generateSwiperButton(2, '1 год: ', 5000)}
      </Group>
    </PageLayout>
  )
}

export default TariffsPage
