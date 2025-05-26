import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router' ;
import Apod from '../src/components/apod/apod.tsx';
import MarsRover from './components/mars-rover/mars-rover.tsx';
import NotFound  from './components/not-found/not-found.tsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/apod",
    element : <Apod />
  },
  {
    path : "/mars-rover",
    element : <MarsRover />
  },
  {
    path : "*",
    element : <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
