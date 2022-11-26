import { useState } from 'react'

import Card from '@Components/Card'

import Button from '@UIkit/Button'
import CardGroup from '@UIkit/Groups/CardGroup'
import Group from '@UIkit/Groups/Group'
import Icon from '@UIkit/Icon'
import NumberField from '@UIkit/Input/NumberField'
import TextField from '@UIkit/Input/TextField'
import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import PageLayout from '@Layouts/PageLayout'

function DevPage() {
  const [textFieldExample, setTextFieldExample] = useState('Пример')
  return (
    <PageLayout>
      <Typography
        className="test"
        variant="heading-h1"
        color={colors.primaryText01}
      >
        DevPage
      </Typography>
      <Group>
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
      </Group>

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
      <Group>
        <TextField
          placeholder="Имя"
          value={textFieldExample}
          setValue={setTextFieldExample}
        />
        <NumberField
          tel
          minLength={11}
        />
        <NumberField
          minLength={6}
          maxLength={6}
        />
      </Group>
    </PageLayout>
  )
}

export default DevPage
