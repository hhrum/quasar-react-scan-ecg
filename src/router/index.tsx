import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '@Pages/AuthPage'
import DevPage from '@Pages/DevPage'
import OnBoardingPage from '@Pages/OnBoardingPage'
import PhoneConfirmPage from '@Pages/PhoneConfirmPage'
import SubscriptionPage from '@Pages/SubscriptionPage'

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
  {
    path: '/subscription',
    element: <SubscriptionPage />,
  },
])

export default router
