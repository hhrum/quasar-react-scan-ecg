import { createBrowserRouter } from 'react-router-dom'

import DevPage from '@Pages/DevPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DevPage />,
  },
])

export default router
