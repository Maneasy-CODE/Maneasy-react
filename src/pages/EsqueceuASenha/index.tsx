import "./style.css"

import { Icon } from "@iconify/react";

//imagens
import imgLogo from "../../assets/images/logo_colorida.svg";

import { Link } from "react-router-dom";

function EsqueceuASenha() {
  return (
    <main id="tela_esqueceu_senha">
      <div className="nav_btn_voltar">
        <Link to="../entrar/entrar.html">
          <Icon icon="clarity:circle-arrow-solid" rotate={270} />
        </Link>
      </div>
      <section className="section_esqueceu_password" id="esqueceu_senha">
        <section className="section_logo">
          <div className="section_img_logo">
            <img src={imgLogo} alt="" />
          </div>
        </section>
        <section className="section_esqueceu_senha">
          <h1>
            Esqueceu
            <br />
            <span>sua senha?</span>
          </h1>
          <div className="section_input">
            <div>
              <label htmlFor="Chapa">Chapa</label>
              <div className="input-icons">
                <Icon className="icon" icon="ic:outline-badge" />
                <input name="Chapa" className="input-field" type="text" />
              </div>
            </div>
            <div>

              <label htmlFor="E-mail">E-mail</label>
              <div className="input-icons">
                <Icon className="icon" icon="mingcute:user-4-fill" />
                <input name="E-mail" className="input-field" type="email" />
              </div>
            </div>
            <div className="section_btn_confirmar">
              <Link to="../entrar/entrar.html">Confirmar</Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  )




}

export default EsqueceuASenha; 