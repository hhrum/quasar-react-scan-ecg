import Button from '@UIkit/Button'
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
    </PageLayout>
  )
}

export default DevPage
