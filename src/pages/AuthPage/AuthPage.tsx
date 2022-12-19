import Button from '@UIkit/Button'
import Group from '@UIkit/Groups/Group'
import Icon from '@UIkit/Icon'
import NumberField from '@UIkit/Input/NumberField'
import Typography from '@UIkit/Typography'

import colors from '@Assets/styles/colors'

import PageLayout from '@Layouts/PageLayout'

import './AuthPage.scss'

function AuthPage() {
  return (
    <PageLayout contentClassName="auth-page">
      <Group contentClassName="auth-page__content">
        <Typography
          className="auth-page__title"
          variant="heading-h1"
        >
          Войти или зарегистрироваться
        </Typography>
        <NumberField
          className="auth-page__phone-input"
          tel
        />
        <Button className="auth-page__submit-button">Получить код</Button>
        <div className="auth-page__description">
          <div className="auth-page__description-titles">
            <Typography
              variant="text-t2"
              color={colors.secondaryDark02}
            >
              Регистрируясь, вы принимаете условия
            </Typography>
            <Typography variant="text-t2">Политики конфиденциальности</Typography>
          </div>
          <div className="auth-page__description-icons">
            <div className="auth-page__icon">
              <Icon iconName="appleIcon" />
            </div>
            <div className="auth-page__icon">
              <Icon iconName="googleIcon" />
            </div>
            <div
              className="auth-page__icon"
              style={{ backgroundColor: '#0077FF', border: 'none' }}
            >
              <Icon iconName="vkIcon" />
            </div>
          </div>
        </div>
      </Group>
    </PageLayout>
  )
}

export default AuthPage
