import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização
import './index.css'
import Menu from './components/Menu'

//pagina
import DemandaCadastro from './pages/DemandaCadastro';

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DemandaCadastro />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
