import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização
import './index.css'

//pagina
/*import ProfissionalCadastro from "./pages/ProfissionalCadastro"*/
/*import ProfissionalConsulta from "./pages/ProfissionalConsulta"*/
import ProfissionalAtualizar from "./pages/ProfissionalAtualizar"

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      { /* <Route path='/' element={<ProfissionalCadastro />} />
        <Route path='/profissionalCadastro' element={<ProfissionalCadastro />} />*/}
        {/*<Route path='/' element={<ProfissionalConsulta />} />*/}
        { /*<Route path='/profissionalConsulta' element={<ProfissionalConsulta />} />*/}
        <Route path='/' element={<ProfissionalAtualizar />} />
        { /*<Route path='/ProfissionalAtualizar' element={<ProfissionalAtualizar />} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)