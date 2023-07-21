import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
import { AplicationRoutes } from './routes/AplicationRoutes'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AplicationRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
