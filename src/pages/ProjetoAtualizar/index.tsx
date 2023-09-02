//estilizacao
import "./style.css";
import icone_titulo from "../../assets/images/icone_titulo.svg"
import icone_squad from "../../assets/images/btn_squad.svg"
import btn_confirmar from "../../assets/images/btn_confirmar.svg"
import btn_cancelar from "../../assets/images/btn_cancelar.svg"
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function ProjetoAtualizar() {

    return (
        <>
            <main>
                <section id="projeto_atualizar">
                    <div className="container">
                        <div className="section_titulo">
                            <img src={icone_titulo} alt="" />
                            <h1>Projeto</h1>
                        </div>
                        <nav className="atualizar_e_consultar">
                            <Link className="btn_atualizar" to={"#"}>
                                Atualizar
                            </Link>
                            <Link
                                className="btn_consultar" to={"#"}>
                                Consultar
                            </Link>
                        </nav>
                        <div className="campo_nome_do_projeto">
                            <div className="input_projeto">
                                <label htmlFor="nome_do_projeto">Nome do Projeto</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="la:project-diagram" />

                                    <input name="nome_do_projeto" className="input-field" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="section_calendario">
                            <div className="input_criacao">
                                <label htmlFor="nome_criacao">Criação</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="zondicons:calendar" />

                                    <input
                                        name="nome_criacao"
                                        className="input-calendario"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="input_criacao">
                                <label htmlFor="nome_inicio">Ínicio</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="zondicons:calendar" />

                                    <input
                                        name="nome_criacao"
                                        className="input-calendario"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="input_criacao">
                                <label htmlFor="nome_termino">Término</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="zondicons:calendar" />

                                    <input
                                        name="nome_criacao"
                                        className="input-calendario"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="campo_objetivo_do_projeto">
                            <div className="input_objetivo">
                                <label htmlFor="nome_do_projeto">Objetivo do Projeto</label>
                                <div className="input-icons">
                                    <textarea
                                        className="campo_objetivo"
                                        name="objetivo_projeto"
                                        id=""
                                        rows={4}
                                        cols={50}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="section_orcamento_e_status">
                            <div className="input_orcamento">
                                <label htmlFor="nome_inicio">Orçamento do Projeto</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="fa:dollar" />

                                    <input
                                        name="nome_criacao"
                                        className="input-calendario"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="select_status">
                                <label htmlFor="nome_termino">Status do Projeto</label>
                                <div className="select-icons">
                                    <Icon className="icon" icon="el:ok-sign" />

                                    <select name="status" id="">
                                        <option value="">A iniciar</option>
                                        <option value="">Em andamento</option>
                                        <option value="">Finalizado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="link_button">
                            <a href="../squad_cadastro/squad_cadastro.html">
                                <img src={icone_squad} alt="squad" />
                            </a>
                            <div className="btn_links">
                                <button>
                                    <img src={btn_confirmar} alt="confirmar" />
                                </button>
                                <button>
                                    <img src={btn_cancelar} alt="cancelar" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

export default ProjetoAtualizar