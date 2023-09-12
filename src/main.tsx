import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import DemandaConsulta from './pages/DemandaConsulta'

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/demandaConsulta' element={<DemandaConsulta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
