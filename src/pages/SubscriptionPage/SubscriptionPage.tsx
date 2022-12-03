import { useMemo } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Header from '@Components/HeaderComponents/Header'
import HeaderButton from '@Components/HeaderComponents/HeaderButton'

import Button from '@UIkit/Button'
import Group from '@UIkit/Groups/Group'
import Icon from '@UIkit/Icon'
import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import PageLayout from '@Layouts/PageLayout'

import './SubscriptionPage.scss'

const subscriptions = [
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

function SubscriptionPage() {
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
            className="subscription-page__header-text"
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
  return (
    <PageLayout
      header={header}
      footer={footer}
      contentClassName="subscription-page"
      footerClassName="subscription-page__footer"
    >
      <Group>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="subscription-page__slide"
        >
          {subscriptions.map((elem) => (
            <SwiperSlide key={elem.id}>
              <div className="subscription-page__slide-image" />
              <Typography
                variant="heading-h2"
                className="subscription-page__slide-title"
              >
                {elem.title}
              </Typography>
              <div className="subscription-page__description-wrapper">
                <div className="subscription-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="subscription-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="subscription-page__slide-subtitle"
                  >
                    {elem.subTitle1}
                  </Typography>
                </div>
                <div className="subscription-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="subscription-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="subscription-page__slide-subtitle"
                  >
                    {elem.subTitle2}
                  </Typography>
                </div>
                <div className="subscription-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="subscription-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="subscription-page__slide-subtitle"
                  >
                    {elem.subTitle3}
                  </Typography>
                </div>
                <div className="subscription-page__subtitle-wrapper">
                  <Icon
                    iconName="check"
                    className="subscription-page__slide-icon"
                  />
                  <Typography
                    variant="text-t1"
                    className="subscription-page__slide-subtitle"
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
          className="subscription-page__thumb-button"
        >
          <div className="subscription-page__thumb-button-text">
            <span>
              <b>1 месяц: </b>
            </span>
            <span>200 ₽</span>
          </div>
          <Icon iconName="subscribeCheck" />
        </button>
        <button
          type="button"
          className="subscription-page__thumb-button"
        >
          <div className="subscription-page__thumb-button-text">
            <span>
              <b>1 месяц: </b>
            </span>
            <span>350 ₽</span>
          </div>
          <Icon iconName="subscribeCheck" />
        </button>
        <button
          type="button"
          className="subscription-page__thumb-button"
        >
          <div className="subscription-page__thumb-button-text">
            <span>
              <b>1 год: </b>
            </span>
            <span>5000 ₽</span>
          </div>
          <Icon iconName="subscribeCheck" />
        </button>
      </Group>
    </PageLayout>
  )
}

export default SubscriptionPage
