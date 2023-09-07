import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização
import './index.css'

//pagina
import ProfissionalConsulta from "./pages/ProfissionalConsulta"

//componente
import Menu from './components/Menu'

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       { /*<Route path='/' element={<ProfissionalConsulta />} />*/}
        <Route path='/profissionalConsulta' element={<ProfissionalConsulta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)








