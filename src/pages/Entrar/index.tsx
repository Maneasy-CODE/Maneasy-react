import { Icon } from "@iconify/react";
import "./style.css";
import "../../index.css";

import entrar_logo from "../../assets/images/logo_colorida.svg";

function Entrar() {
  return (

    <div id="entrar">
      <main>
        <section className="section_logo">
          <div className="section_img_logo">
            <img src={entrar_logo} alt="Logo Maneasy" />
          </div>
        </section>
        <section className="section_esqueceu_senha">
          <h1>
            Bem<span>-vindo</span>
          </h1>
          <div className="section_input">
            <div className="email">
              <label htmlFor="Chapa">E-mail</label>
              <div className="input_icons">
                <Icon className="icon" icon="mingcute:user-4-fill" />
                <input name="Chapa" className="input_field" type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="Senha">Senha</label>
              <div className="input_icons">
                <Icon className="icon" icon="mdi:password" />
                <input name="Senha" className="input_field" type="password" />
              </div>
            </div>
            <a className="sublinado" href="../esqueceu_senha/esqueceu_senha.html">
              <p className="nav_esqueceu_senha">Esqueceu sua senha?</p>
            </a>
            <div className="section_btn_confirmar">
              <a href="../dashboard/dashboard.html">Confirmar</a>
            </div>
            <a href="../cadastrar/cadastrar.html" className="sublinado">
              <p className="nav_cadastro">
                Ainda não tem uma conta?
                <br />
                Cadastre-se
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )

}

export default Entrar;