import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router' ;
import Apod from '../src/components/apod/apod.tsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/apod",
    element : <Apod />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
