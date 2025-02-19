import { createBrowserRouter } from 'react-router'

import Root from './root'
import ErrorPage from './pages/error-page'
import HomePage from './pages/home-page'
import ContactsPage from './pages/contacts-page'
import DashboardPage from './pages/dashboard-page'
import SettingsPage from './pages/settings-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
])
