import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//IMPORT PAGINAS
import Menu from './components/Menu'
import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';
import EsqueceuASenha from './pages/EsqueceuASenha';
import Dashboard from './pages/Dashboard';
import ProfissionalCadastro from "./pages/ProfissionalCadastro"

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>   {/*// INDICA QUE A APLICAÇÃO TERA ROTAS  */}
      <Routes>         {/*// INDICA QUE TEM UMA LISTA DE COMPONENTES, OU SEJA, UMA LISTA DE ROTAS  */}
        <Route path='/pagina/entrar' element={<Entrar />} />  //   {/*INDICA O CAMINHO DO COMPONENTE E O NOME DA ROTA DELE */}
        <Route path='/pagina/cadastro' element={<Cadastro />} />
        <Route path='/pagina/esqueceu/senha' element={<EsqueceuASenha />} />
        <Route path='/pagina/dashboard' element={<Dashboard />} />
        <Route path='/pagina/profissional/cadastro' element={<ProfissionalCadastro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,)
