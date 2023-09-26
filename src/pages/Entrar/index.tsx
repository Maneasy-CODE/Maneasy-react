import { Icon } from "@iconify/react";
import "./style.css";
import "../../index.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import entrar_logo from "../../assets/images/logo_colorida.svg";

function Entrar() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <main id="entrar" className="main_entrar">
      <section className="section_logo">
        <div className="section_img_logo">
          <img src={entrar_logo} alt="Logo Maneasy" />
        </div>
      </section>
      <section className="section_esqueceu_senha">
        <h1>
          Bem<span>-vindo</span>
        </h1>
        <form className="section_input">
          <div className="email">
            <label htmlFor="Chapa">E-mail</label>
            <div className="input_icons">
              <Icon className="icon" icon="mingcute:user-4-fill" />
              <input
                name="Chapa"
                className="input_field"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="Senha">Senha</label>
            <div className="input_icons">
              <Icon className="icon" icon="mdi:password" />
              <input
                name="Senha"
                className="input_field"
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>
          <Link className="sublinado" to={"/pagina/esqueceu/senha"}>
            <p className="nav_esqueceu_senha">Esqueceu sua senha?</p>
          </Link>
          <Link className="sublinado" to={"/pagina/dashboard"}>
            <div className="section_btn_confirmar">
              <button type="submit">Confirmar</button>
            </div>
          </Link>
          <Link to={"/pagina/cadastro"} className="sublinado">
            <p className="nav_cadastro">
              Ainda não tem uma conta?
              <br />
              Cadastre-se
            </p>
          </Link>
        </form>
      </section>
    </main>
  )

}

export default Entrar;