import React from 'react'
import ReactDOM from 'react-dom/client'
//estilizacao
import './index.css'

//componentes
import ChamadoAtualizar from './pages/ChamadoAtualizar'

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ChamadoAtualizar/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
