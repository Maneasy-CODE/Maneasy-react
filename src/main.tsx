import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemandaAtualizar from './pages/DemandaAtualizar'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/demandaAtualizar' element={<DemandaAtualizar />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
