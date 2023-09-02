import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import Menu from './components/Menu'
import ProjetoConsulta from './pages/ProjetoConsulta'
import Entrar from './pages/Entrar'


//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/projetoConsulta' element={<ProjetoConsulta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
