import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização
import './index.css'
//IMPORT PAGINAS
import Menu from './components/Menu'
import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';
import EsqueceuASenha from './pages/EsqueceuASenha';
import Dashboard from './pages/Dashboard';
import ProfissionalCadastro from "./pages/ProfissionalCadastro"
import ProfissionalConsulta from './pages/ProfissionalConsulta';
import ProfissionalAtualizar from './pages/ProfissionalAtualizar';
import ProjetoCadastro from './pages/ProjetoCadastro';

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjetoConsulta from './pages/ProjetoConsulta';
import ProjetoAtualizar from './pages/ProjetoAtualizar';
import DemandaCadastro from './pages/DemandaCadastro';
import DemandaConsulta from './pages/DemandaConsulta';
import DemandaAtualizar from './pages/DemandaAtualizar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>   {/*// INDICA QUE A APLICAÇÃO TERA ROTAS  */}
      <Routes>         {/*// INDICA QUE TEM UMA LISTA DE COMPONENTES, OU SEJA, UMA LISTA DE ROTAS  */}
        <Route path='/pagina/entrar' element={<Entrar />} />  //   {/*INDICA O CAMINHO DO COMPONENTE E O NOME DA ROTA DELE */}
        <Route path='/pagina/cadastro' element={<Cadastro />} />
        <Route path='/pagina/esqueceu/senha' element={<EsqueceuASenha />} />
        <Route path='/pagina/dashboard' element={<Dashboard />} />
        <Route path='/pagina/profissional/cadastro' element={<ProfissionalCadastro/>} />
        <Route path='/pagina/profissional/consulta' element={<ProfissionalConsulta/>} />
        <Route path='/pagina/profissional/atualizar' element={<ProfissionalAtualizar/>} />
        <Route path='/pagina/projeto/cadastro' element={<ProjetoCadastro/>} />
        <Route path='/pagina/projeto/consulta' element={<ProjetoConsulta/>} />
        <Route path='/pagina/projeto/atualizar' element={<ProjetoAtualizar/>} />
        <Route path='/pagina/demanda/cadastro' element={<DemandaCadastro/>} />
        <Route path='/pagina/demanda/consulta' element={<DemandaConsulta/>} />
        <Route path='/pagina/demanda/atualizar' element={<DemandaAtualizar/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,)
