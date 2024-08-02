import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './main.css'
import routes from './router'

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
 <RouterProvider router={router} />
)