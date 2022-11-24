import Swiper from 'swiper'

interface OnBoardingSwiperProps {
  onSwiperImageHandler: (swiper: Swiper) => void
  onSwiperTextHandler: (swiper: Swiper) => void
  setSwiperActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

export default OnBoardingSwiperProps
