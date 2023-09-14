import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import EsqueceuASenha from './pages/EsqueceuASenha'

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EsqueceuASenha />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)