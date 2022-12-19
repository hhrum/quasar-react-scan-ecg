import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '@Pages/AuthPage'
import DevPage from '@Pages/DevPage'
import OnBoardingPage from '@Pages/OnBoardingPage'
import PhoneConfirmPage from '@Pages/PhoneConfirmPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DevPage />,
  },
  {
    path: '/onboarding',
    element: <OnBoardingPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/phoneconfirm',
    element: <PhoneConfirmPage />,
  },
])

export default router
