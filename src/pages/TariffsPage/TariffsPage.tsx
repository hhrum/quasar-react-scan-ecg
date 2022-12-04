import { useMemo, useState } from 'react'
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
    subTitle1: '2 расшифровки ЭКГ',
    subTitle2: 'Изучение теории',
    subTitle3: 'Решение тестов',
    subTitle4: 'Тренажёр',
  },
  {
    id: 2,
    title: 'Оптимальный тариф',
    subTitle1: '5 расшифровок ЭКГ',
    subTitle2: 'Изучение теории',
    subTitle3: 'Решение тестов',
    subTitle4: 'Тренажёр',
  },
  {
    id: 3,
    title: 'Тариф для ЛПУ',
    subTitle1: 'Безлимитные расшифровки',
    subTitle2: 'Изучение теории',
    subTitle3: 'Решение тестов',
    subTitle4: 'Тренажёр',
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
  const handelSlideTo = (index: number) => {
    if (swiper) {
      swiper.slideTo(index)
    }
    setButtonIndex(index)
  }
  const footer = useMemo(() => <Button>Подписаться</Button>, [])
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
                <div className="tariffs-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="tariffs-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="tariffs-page__slide-subtitle"
                  >
                    {elem.subTitle1}
                  </Typography>
                </div>
                <div className="tariffs-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="tariffs-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="tariffs-page__slide-subtitle"
                  >
                    {elem.subTitle2}
                  </Typography>
                </div>
                <div className="tariffs-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="tariffs-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="tariffs-page__slide-subtitle"
                  >
                    {elem.subTitle3}
                  </Typography>
                </div>
                <div className="tariffs-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="tariffs-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="tariffs-page__slide-subtitle"
                  >
                    {elem.subTitle4}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className={`tariffs-page__button${buttonIndex === 0 ? '-active' : ''}`}
          onClick={() => handelSlideTo(0)}
        >
          <div className="tariffs-page__button-text">
            <span>
              <b>1 месяц: </b>
            </span>
            <span>200 ₽</span>
          </div>
          {buttonIndex === 0 && <Icon iconName="subscribeCheck" />}
        </button>
        <button
          type="button"
          className={`tariffs-page__button${buttonIndex === 1 ? '-active' : ''}`}
          onClick={() => handelSlideTo(1)}
        >
          <div className="tariffs-page__button-text">
            <span>
              <b>1 месяц: </b>
            </span>
            <span>350 ₽</span>
          </div>
          {buttonIndex === 1 && <Icon iconName="subscribeCheck" />}
        </button>
        <button
          type="button"
          className={`tariffs-page__button${buttonIndex === 2 ? '-active' : ''}`}
          onClick={() => handelSlideTo(2)}
        >
          <div className="tariffs-page__button-text">
            <span>
              <b>1 год: </b>
            </span>
            <span>5000 ₽</span>
          </div>
          {buttonIndex === 2 && <Icon iconName="subscribeCheck" />}
        </button>
      </Group>
    </PageLayout>
  )
}

export default TariffsPage
