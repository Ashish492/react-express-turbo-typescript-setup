import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import route from './router'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([route])} />
  </React.StrictMode>,
)
