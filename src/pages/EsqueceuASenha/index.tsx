import "./style.css"

import { Icon } from "@iconify/react";

import imgLogo1 from "../../assets/images/logo_colorida1.svg";

import { Link } from "react-router-dom";

function EsqueceuASenha() {
  return (
    <main id="tela_esqueceu_senha" className="background_maneasy">
      <div className="nav_btn_voltar">
        <Link to={"#"}>
          <Icon className="icon_entrar" icon="clarity:circle-arrow-solid"   rotate={271} />
  
        </Link>
      </div> 
      <section className="section_esqueceu_password" id="esqueceu_senha" >
        <section className="section_logo">
          <div className="section_img_logo">
            <div className="section_img_logo1">
             </div>
            <img src={imgLogo1} alt="" />
          </div>
        </section>
        <form className="section_esqueceu_senha">
          <h1>
            Esqueceu
            <br />
            <span>sua senha?</span>
          </h1>
          <div className="section_input">
            <div className="input_com_label">
              <label htmlFor="Chapa">Chapa</label>
              <div className="input-icons">
                <Icon className="icon" icon="ic:outline-badge" />
                <input name="Chapa" className="input-field" type="text" required placeholder="Digite aqui a sua chapa:" />
              </div>
            </div>
            <div className="input_com_label">
              <label htmlFor="E-mail">E-mail</label>
              <div className="input-icons">
                <Icon className="icon" icon="mingcute:user-4-fill" />
                <input name="E-mail" className="input-field" type="email" required placeholder="Digite aqui a sua senha:" />
              </div>
            </div>
            <div className="section_btn_confirmar">
              <button type="submit">Confirmar</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  )

}

export default EsqueceuASenha; 