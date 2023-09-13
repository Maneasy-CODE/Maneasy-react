// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DO MENU
import Menu from '../../components/Menu';
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";
import btn_confirmar from "../../assets/images/btn_confirmar.svg";
import btn_squad from "../../assets/images/btn_squad.svg";
// IMPORT REACT ROUTER DOM
import { Link } from "react-router-dom";


function Squadmontar() {
    return (
        <main id="squad_cadastro">
            <Menu></Menu>
            <section className="container">
                <div className="section_titulo">
                    <img src={bolinha_titulo} alt="" />
                    <h1>Squad</h1>
                </div>
                <form>
                    <div className="form_id">
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="id">ID</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="ic:outline-badge" />
                                <input name="id" className="input-field" type="number" />
                            </div>
                        </div>
                        <div>
                            <Link to={"#"} className="section_cadastro_squad_btn">
                                <img src={lupa} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="section_pesquisa">
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="nome_projeto">Nome do Projeto</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="la:project-diagram" />
                                <input name="nome_projeto" className="input-field" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="form_date">
                        <div className="form_criacao_inicio_termino">
                            <div className="form_date_criacao_inicio_termino">
                                <label htmlFor="criacao">Criação</label>
                                <div className="input-icons">
                                    <Icon
                                        className="icon icon_calendario"
                                        icon="zondicons:calendar"
                                    />
                                    <input name="criacao" className="input-field" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="form_criacao_inicio_termino">
                            <div className="form_date_criacao_inicio_termino">
                                <label htmlFor="inicio">Ínicio</label>
                                <div className="input-icons">
                                    <Icon
                                        className="icon icon_calendario"
                                        icon="zondicons:calendar"
                                    />
                                    <input name="inicio" className="input-field" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="form_criacao_inicio_termino">
                            <div className="form_date_criacao_inicio_termino">
                                <label htmlFor="termino">Término</label>
                                <div className="input-icons">
                                    <Icon
                                        className="icon icon_calendario"
                                        icon="zondicons:calendar"
                                    />
                                    <input name="termino" className="input-field" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_objetivo_projeto">
                        <div className="section_objetivo_projeto_label_textarea">
                            <label htmlFor="objetivo_projeto">Objetivo do Projeto</label>
                            <div>
                                <textarea
                                    id="objetivo_projeto"
                                    name="objetivo_projeto"
                                    rows={4}
                                    cols={50}
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="section_pesquisa espacamento">
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="Chapa">Chapa</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="ic:outline-badge" />
                                <input name="Chapa" className="input-field" type="number" />
                            </div>
                        </div>
                        <div>
                            <p>ou</p>
                        </div>
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="Consultar">Consultar</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="mingcute:user-4-fill" />
                                <input name="Consultar" className="input-field" type="text" />
                            </div>
                        </div>
                        <Link to={"#"} className="section_pesquisa_btn">
                            <img src={lupa} alt="" />
                        </Link>
                    </div>
                    <div className="section_resultado">
                        <h2>Lista de profissionais</h2>
                        <div className="tabela_scroll">
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010101</p>
                                    <p className="section_resultado_dados_nome">
                                        Claudio Francisco Porto
                                    </p>
                                </div>
                                <Link to={"#"} className="section_resultado_dados_btn">
                                    <img src={btn_confirmar} alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010102</p>
                                    <p className="section_resultado_dados_nome">
                                        Gustavo Luiz Miranda
                                    </p>
                                </div>
                                <Link to={"#"} className="section_resultado_dados_btn">
                                    <img src={btn_confirmar} alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010103</p>
                                    <p className="section_resultado_dados_nome">
                                        Hosmairys Yuriannys Holder Rodriguez
                                    </p>
                                </div>
                                <Link to={"#"} className="section_resultado_dados_btn">
                                    <img src={btn_squad} alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010104</p>
                                    <p className="section_resultado_dados_nome">
                                        Jhonatan Pereira Ferreira
                                    </p>
                                </div>
                                <Link to={"#"} className="section_resultado_dados_btn">
                                    <img src={btn_squad} alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010105</p>
                                    <p className="section_resultado_dados_nome">Lucas Oliveira</p>
                                </div>
                                <Link to={"#"} className="section_resultado_dados_btn">
                                    <img src={btn_squad} alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010106</p>
                                    <p className="section_resultado_dados_nome">
                                        Priscila Laurentino
                                    </p>
                                </div>
                                <Link to={"#"} className="section_resultado_dados_btn">
                                    <img src={btn_squad} alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010107</p>
                                    <p className="section_resultado_dados_nome">
                                        Marcel de Lima Brito
                                    </p>
                                </div>
                                <Link to={"#"} className="section_resultado_dados_btn">
                                    <img src={btn_squad} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Squadmontar;