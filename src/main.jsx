import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './routes/error-page.jsx'
import SigninPage from './routes/signinpage.jsx'



var routes = createBrowserRouter(
  [
    {
      path: '/', element: <Root />, children: [
        { path: 'home', element: <>home</>, },
        { path: 'about', element: <>about</>, },
        { path: 'contact', element: <>contact</>, },
        { path: 'signin', element: <SigninPage /> }

      ],
      errorElement: <ErrorPage />
    },

  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
