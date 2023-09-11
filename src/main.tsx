import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização
import './index.css'

//pagina
import ProfissionalCadastro from "./pages/ProfissionalCadastro"

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        { /*<Route path='/' element={<ProfissionalCadastro />} />*/}
        <Route path='/profissionalCadastro' element={<ProfissionalCadastro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
