import { createBrowserRouter } from 'react-router-dom'

import DevPage from '@Pages/DevPage'
import OnBoardingPage from '@Pages/OnBoardingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DevPage />,
  },
  {
    path: '/onboarding',
    element: <OnBoardingPage />,
  },
])

export default router
