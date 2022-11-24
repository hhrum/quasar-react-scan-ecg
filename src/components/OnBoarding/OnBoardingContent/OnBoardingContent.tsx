import Group from '@Components/Groups/Group'

import Typography from '@UIkit/Typography'

import './OnBoardingContent.scss'
import OnBoardingContentProps from './OnBoardingContent.types'

function OnBoardingContent({ image, title, text }: OnBoardingContentProps) {
  const ImageComponent = image

  return (
    <div className="onboarding-content">
      {image && (
        <div className="onboarding-content__img">
          <ImageComponent />
        </div>
      )}

      <Group
        align="center"
        contentClassName="onboarding-content__text-info"
      >
        <Typography
          className="onboarding-content__title"
          variant="heading-h2"
        >
          {title}
        </Typography>
        <Typography
          className="onboarding-content__text"
          variant="text-t1"
        >
          {text}
        </Typography>
      </Group>
    </div>
  )
}

OnBoardingContent.defaultProps = {
  image: null,
  title: null,
  text: null,
}

export default OnBoardingContent
