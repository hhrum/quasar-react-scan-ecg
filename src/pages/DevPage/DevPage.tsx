import Typography from '@UIkit/Typography'
import Button from '@UIkit/Button'
import colors from '@Assets/styles/colors'
import icons from '@Assets/images/icons'

import './DevPage.scss'

const DevPage = () => {
  return (
    <>
      <Typography
        className='test'
        variant='heading-h1'
        color={colors.blackFont}
      >
        DevPage
      </Typography>
      <Button type='primary'>Получить код</Button>
      <Button type='primary' disabled={true}>Получить код</Button>
      <Button type='secondary'>Получить код</Button>
      <Button type='primary' icon={icons.Play}>Играть</Button>
      <Button type='primary' icon={icons.Play} disabled={true}>Играть</Button>
      <Button type='primary' icon={icons.Photo}>Добавить фото</Button>
    </>
  )
}

export default DevPage
