import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './routes/error-page.jsx'
import SigninPage from './routes/signunpage.jsx'
import LoginPage from './routes/loginpage.jsx'
import HomePage from './routes/homepage.jsx'
import DetailPage from './routes/detail-page.jsx'



var appRoute = createBrowserRouter(
  [
    {
      path: '/', element: <Root />, children: [
        { path: 'home', element: <HomePage />, },
        { path: 'about', element: <>about</>, },
        { path: 'contact', element: <>contact</>, },
        { path: 'product/:id', element: <DetailPage />, },
        { path: 'signup', element: <SigninPage /> },
        { path: 'login', element: <LoginPage />, }

      ],
      errorElement: <ErrorPage />
    },




  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>,
)
