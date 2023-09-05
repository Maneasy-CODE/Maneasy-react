import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Btn_submit_cancel_squad from './components/Btn_submit_cancel_squad';
import Squad_cadastro from "./pages/Squad_cadastros";

//IMPORT DE ROTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Squad_cadastro />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

