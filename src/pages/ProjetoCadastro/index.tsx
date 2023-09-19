// estilizacao
import "./style.css";
import icone_titulo from "../../assets/images/icone_titulo.svg"
import icone_squad from "../../assets/images/btn_squad.svg"
import btn_confirmar from "../../assets/images/btn_confirmar.svg"
import btn_cancelar from "../../assets/images/btn_cancelar.svg"
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";



function ProjetoCadastro() {

   const [nomeProjeto, setNomeProjeto]= useState<string>("");
//    const [dataCriacao, setDataCriacao]= useState<Date | null>();
//    const [dataInicio, setDataInicio]= useState<Date>();
//    const [dataTermino, setDataTermino]= useState<Date>();
   const [objetivoProjeto, setObjetivoProjeto]= useState<string>("");
   const [orcametoProjeto, setOrcamentoProjeto]= useState<string>("");
   const [statusProjeto, setStatusProjeto]= useState<string>("");

   
    return (

        <main id="projeto_cadastro">
            <Menu />
            <section>
                <div className="container">
                    <div className="section_titulo">
                        <img src={icone_titulo} alt="" />
                        <h1>Projeto</h1>
                    </div>
                    <nav className="cadastrar_e_consultar">
                        <Link className="btn_cadastrar" to={"#"}>
                            Cadastrar
                        </Link>

                        <Link className="btn_consultar" to={"#"}>
                            Consultar
                        </Link>
                    </nav>
                    <form>
                        <div className="campo_nome_do_projeto">
                            <div className="input_projeto">
                                <label htmlFor="nome_do_projeto">Nome do Projeto</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="la:project-diagram" />

                                    <input name="nome_do_projeto" className="input-field" type="text" 
                                    placeholder="Digite aqui o nome do projeto: " onChange={(e) => setNomeProjeto(e.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <div className="section_calendario">
                            <div className="input_criacao">
                                {/*<div class="form_date_criacao_inicio_termino">*/}
                                <label htmlFor="nome_criacao">Criação</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="zondicons:calendar" />

                                    <input
                                        name="nome_criacao"
                                        className="input-calendario"
                                        type="date"
                                        // onChange={(e) => setDataCriacao(e.target.value)} 
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input_criacao">
                                {/* <div class="form_date_criacao_inicio_termino">*/}
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
                                {/*  <div class="form_date_criacao_inicio_termino">*/}
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
                                        placeholder="Digite o orçamento do projeto:"
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
                                        <option value="">Em adamento</option>
                                        <option value="">Finalizado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="link_button">
                            <Link to={"#"}>
                                <img src={icone_squad} alt="squad" />
                            </Link>
                            <div className="btn_links">
                                <button>
                                    <img src={btn_confirmar} alt="confirmar" />
                                </button>
                                <button>
                                    <img src={btn_cancelar} alt="cancelar" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );

}

export default ProjetoCadastro;