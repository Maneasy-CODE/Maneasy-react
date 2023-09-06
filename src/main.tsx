import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Menu from './components/Menu'
import { Routes ,BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import ChamadoCadastro from './pages/ChamadoCadastro'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ChamadoCadastro/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
