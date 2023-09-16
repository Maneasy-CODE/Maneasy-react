import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Menu from './components/Menu'
import Cadastro from './pages/Cadastro'

import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>   {/*// INDICA QUE A APLICAÇÃO TERA ROTAS  */}
      <Routes>         {/*// INDICA QUE TEM UMA LISTA DE COMPONENTES, OU SEJA, UMA LISTA DE ROTAS  */}
        <Route path='/' element={<Cadastro />} />  //   {/*INDICA O CAMINHO DO COMPONENTE E O NOME DA ROTA DELE */}
        {/* OS : são para identificar o identificador do usuario ou do servico */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
