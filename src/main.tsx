import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Menu from './components/Menu'
import Entrar from './pages/Entrar'
import ProjetoAtualizar from './pages/ProjetoAtualizar'
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route />

        <Route path="/" element={<ProjetoAtualizar />} />

      </Routes>

    </BrowserRouter>

    

  </React.StrictMode>
)
