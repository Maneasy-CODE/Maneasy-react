//estilizacao
import "./style.css";
import icone_titulo from "../../assets/images/icone_titulo.svg"
import Btn_submit_cancel_squad from "../../components/Btn_submit_cancel_squad";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Menu from "../../components/Menu";

function ProjetoAtualizar() {

    const [nomeProjeto, setNomeProjeto] = useState<string>("");


    return (
        <main id="projeto_atualizar">
            <Menu></Menu>
            <section>
                <div className="container">
                    <div className="section_titulo">
                        <img src={icone_titulo} alt="" />
                        <h1>Projeto</h1>
                    </div>
                    <nav className="atualizar_e_consultar">
                        <Link className="btn_atualizar" to={"#"}>
                            Cadastrar
                        </Link>
                        <Link
                            className="btn_consultar" to={"#"}>
                            Consultar
                        </Link>
                    </nav>
                    <form>
                        <div className="campo_nome_do_projeto">
                            <div className="input_projeto">
                                <label htmlFor="nome_do_projeto">Nome do Projeto</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="la:project-diagram" />

                                    <input name="nome_do_projeto" className="input-field" type="text" placeholder="Digite aqui o nome do projeto: " onChange={(e) => setNomeProjeto(e.target.value)} required />
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
                                        type="date"
                                        required
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
                                        type="date"
                                        required
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
                                        type="date"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="campo_objetivo_do_projeto">
                            <div className="input_objetivo">
                                <label htmlFor="nome_do_projeto">Objetivo do Projeto</label>
                                <div className="input-icons"
                                >
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
                                        placeholder="Digite o valor do orçamento:"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="select_status">
                                <label htmlFor="nome_termino">Status do Projeto</label>
                                <div className="select-icons">
                                    <Icon className="icon" icon="el:ok-sign" />

                                    <select name="status" id="" required>
                                        <option value="">A iniciar</option>
                                        <option value="">Em andamento</option>
                                        <option value="">Finalizado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Btn_submit_cancel_squad />
                </div>
            </section>
        </main>
    );
}

export default ProjetoAtualizar