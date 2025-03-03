import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './root'
import HomePage from './pages/home-page'
import Contacts from './pages/contacts'
import ContactDetails from './pages/contact-details'
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'
import ErrorPage from './pages/error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'contacts/:id', element: <ContactDetails /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
