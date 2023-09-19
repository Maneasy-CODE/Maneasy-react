import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//IMPORT PAGINAS
import Menu from './components/Menu'
import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>   {/*// INDICA QUE A APLICAÇÃO TERA ROTAS  */}
      <Routes>         {/*// INDICA QUE TEM UMA LISTA DE COMPONENTES, OU SEJA, UMA LISTA DE ROTAS  */}
        <Route path='/pagina/entrar' element={<Entrar />} />  //   {/*INDICA O CAMINHO DO COMPONENTE E O NOME DA ROTA DELE */}
        <Route path='/pagina/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,)
