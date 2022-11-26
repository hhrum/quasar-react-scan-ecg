import { useState } from 'react'

import Group from '@Components/Groups/Group'

import Button from '@UIkit/Button'
import NumberField from '@UIkit/Input/NumberField/NumberField'
import TextField from '@UIkit/Input/TextField/TextField'
import Typography from '@UIkit/Typography'

import icons from '@Assets/images/icons'
import colors from '@Assets/styles/colors'

import PageLayout from '@Layouts/PageLayout'

import './DevPage.scss'

function DevPage() {
  const [value, setValue] = useState('Пример')
  return (
    <PageLayout contentClassName="page">
      <Typography
        className="test"
        variant="heading-h1"
        color={colors.primaryText01}
      >
        DevPage
      </Typography>
      <Group style={{ padding: '10px 0' }}>
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
      </Group>
      <Group style={{ padding: '10px 0' }}>
        <TextField
          placeholder="Имя"
          value={value}
          setValue={setValue}
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
