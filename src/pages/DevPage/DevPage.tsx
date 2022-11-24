import CardGroup from '@Components/Groups/CardGroup'

import Button from '@UIkit/Button'
import Card from '@UIkit/Card'
import Typography from '@UIkit/Typography'

import icons from '@Assets/images/icons'
import colors from '@Assets/styles/colors'

import PageLayout from '@Layouts/PageLayout'

import './DevPage.scss'

function DevPage() {
  return (
    <PageLayout>
      <Typography
        className="test"
        variant="heading-h1"
        color={colors.primaryText01}
      >
        DevPage
      </Typography>
      <Button type="primary">Получить код</Button>
      <Button
        type="primary"
        disabled
      >
        Получить код
      </Button>
      <Button type="secondary">Получить код</Button>
      <Button
        type="primary"
        icon={icons.Play}
      >
        Играть
      </Button>
      <Button
        type="primary"
        icon={icons.Play}
        disabled
      >
        Играть
      </Button>
      <Button
        type="primary"
        icon={icons.Photo}
      >
        Добавить фото
      </Button>

      <CardGroup header="Мои ЭКГ-плёнки">
        <Card
          isBigCard
          name="ЭКГ"
          textDate="12.10.2022"
        />
        <Card
          isBigCard
          name="ЭКГ"
          textDate="12.10.2022"
        />
        <Card
          isBigCard
          name="ЭКГ"
          textDate="12.10.2022"
        />
      </CardGroup>
    </PageLayout>
  )
}

export default DevPage
