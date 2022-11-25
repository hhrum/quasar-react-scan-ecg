import Card from '@Components/Card'

import Button from '@UIkit/Button'
import CardGroup from '@UIkit/Groups/CardGroup'
import Icon from '@UIkit/Icon'
import Typography from '@UIkit/Typography'

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
        icon={
          <Icon
            iconName="camera"
            color={colors.white}
          />
        }
      >
        Играть
      </Button>
      <Button
        type="primary"
        icon={
          <Icon
            iconName="play"
            color={colors.primary}
          />
        }
        disabled
      >
        Играть
      </Button>
      <Button
        type="primary"
        icon={
          <Icon
            iconName="camera"
            color={colors.secondaryDark02}
          />
        }
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

      <Icon iconName="check" />
    </PageLayout>
  )
}

export default DevPage
