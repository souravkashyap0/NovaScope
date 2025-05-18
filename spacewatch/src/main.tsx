import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router' ;
import Apod from '../src/components/apod/apod.tsx';
import MarsRover from './components/mars-rover/mars-rover.tsx';

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
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
