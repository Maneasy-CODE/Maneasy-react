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
import ProjetoConsulta from './pages/ProjetoConsulta';
import ProjetoAtualizar from './pages/ProjetoAtualizar';
import DemandaCadastro from './pages/DemandaCadastro';
import DemandaConsulta from './pages/DemandaConsulta';
import DemandaAtualizar from './pages/DemandaAtualizar';
import Consultas from './pages/Consultas';

//rotas

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChamadoCadastro from './pages/ChamadoCadastro';
import ChamadoConsulta from './pages/ChamadoConsulta';
import ChamadoAtualizar from './pages/ChamadoAtualizar';
import SquadCadastros from './pages/Squad_cadastros';
import Squadmontar from './pages/Squad_montar';
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
        <Route path='/pagina/consultas' element={<Consultas/>} />
        <Route path='/pagina/chamado/cadastro' element={<ChamadoCadastro/>} />
        <Route path='/pagina/chamado/consulta' element={<ChamadoConsulta/>} />
        <Route path='/pagina/chamado/atualizar' element={<ChamadoAtualizar/>} />
        <Route path='/pagina/cadastro/squad' element={<SquadCadastros/>}/>
        <Route path='/pagina/montar/squad' element={<Squadmontar/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,)
