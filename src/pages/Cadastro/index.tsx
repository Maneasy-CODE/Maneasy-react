import "./style.css";

import { Icon } from '@iconify/react';
import entrar_logo from "../../assets/images/logo_colorida.svg";


function Cadastro() {
    return (

        <div id="cadastrar">

            <nav className="nav_btn_voltar">
                <a href="../entrar/entrar.html">
                    <Icon className="icon"icon="clarity:circle-arrow-solid" />
                </a>
            </nav>

            <main>
                <section className="section_logo">
                    <div className="section_img_logo">
                        <img src={entrar_logo} alt="Logo Maneasy" />
                    </div>
                </section>
                <section className="section_esqueceu_senha">
                    <h1>
                        Cadastre<span>-se</span>
                    </h1>
                    <form className="section_input" action="">
                        <div className="section_cadastro">
                            <label htmlFor="Chapa">Chapa</label>
                            <div className="input_icons">
                                <Icon className="icon" icon="ic:outline-badge" />
                                <input name="Chapa" className="input_field" type="text" />
                            </div>
                        </div>
                        <div className="section_cadastro">
                            <label htmlFor="Nome">Nome</label>
                            <div className="input_icons">
                                <Icon className="icon" icon="mingcute:user-4-fill" />
                                <input name="Nome" className="input_field" type="text" />
                            </div>
                        </div>
                        <div className="section_cadastro">
                            <label htmlFor="Email">E-mail</label>
                            <div className="input_icons">
                                <Icon className="icon" icon="ic:round-email" />
                                <input name="Email" className="input_field" type="text" />
                            </div>
                        </div>
                        <div className="section_input_senha">
                            <div>
                                <label htmlFor="Senha">Senha</label>
                                <div className="input_icons">
                                    <Icon className="icon" icon="mdi:password" />
                                    <input name="Senha" className="input_field_senha" type="email" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="ConfirmarSenha">Confirmar Senha</label>
                                <div className="input_icons">
                                    <Icon className="icon" icon="mdi:password" />
                                    <input name="ConfirmarSenha" className="input_field_senha" type="email" />
                                </div>
                            </div>
                        </div>
                        <div className="section_btn_confirmar">
                            <a href="../entrar/entrar.html">Confirmar</a>
                        </div>
                    </form>
                </section>
            </main>
        </div>


    )
}

export default Cadastro;
