//estilizacacao
import "./style.css"
import { Icon } from "@iconify/react";
import Menu from "../../components/Menu";
import bolinha from "../../assets/images/icone_titulo.svg";

//rotas
import { Link } from "react-router-dom";
import Btn_submit_cancel_squad from "../../components/Btn_submit_cancel_squad";

function ChamadoCadastro() {
    return (
        <main id="chamado_cadastro" className="main_cadastro">
            <Menu/>
            <section className="section-width">
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="cadastrar">
                            <img src={bolinha} alt="" />
                            <h1>Chamados</h1>
                        </div>
                        <div className="botao">
                            <Link  className="button_cadastrar" to={""}>Cadastrar</Link>
                            <Link className="button_consultar" to={""}>Consultar</Link>
                        </div>
                        <div className="section_formulario1">
                            <div className="input_setor">
                                <label htmlFor="setor">Setor</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="ic:outline-badge" />

                                    <input name="setor" className="input-field-medium" type="text" />
                                </div>
                            </div>
                            <div className="input_solicitante">
                                <label htmlFor="Consultar">Nome Solicitante</label>
                                <div className="input-icons">

                                    <Icon className="icon" icon="mingcute:user-4-fill" />

                                    <input
                                        name="nome-solicitante"
                                        className="input-field-big"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="section_formulario2">
                            <div className="input_chapa">
                                <label htmlFor="chapa-profissional">Chapa Profissional</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="ic:outline-badge" />
                                    <input
                                        name="chapa-profissional"
                                        className="input-field-medium"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="input_nome">
                                <label htmlFor="nome-profissional">Nome Profissional</label>
                                <div className="input-icons">

                                    <Icon className="icon" icon="mingcute:user-4-fill" />

                                    <input
                                        name="nome-profissional"
                                        className="input-field-big"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="section_formulario3">
                            <div className="input_criacao">
                                <label htmlFor="date">Criação</label>
                                <div className="input-icons">

                                    <Icon className="icon" icon="bx:calendar" />

                                    <input type="date" className="input-field-little" />
                                </div>
                            </div>
                            <div className="input_inicio">
                                <label htmlFor="date">Inicio</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="bx:calendar" />

                                    <input type="date" className="input-field-little" />
                                </div>
                            </div>
                            <div className="input_termino">
                                <label htmlFor="date">Término</label>
                                <div className="input-icons">

                                    <Icon className="icon" icon="bx:calendar" />

                                    <input type="date" className="input-field-little" />
                                </div>
                            </div>
                        </div>
                        <div className="section_formulario4">
                            <label htmlFor="text-area">Descriçao Chamado</label>
                            <textarea
                                className="descricao-chamado"
                                name="descricao-chamado"
                                id="descricao-chamado"
                                rows={5}
                                defaultValue={""}
                            />
                        </div>
                        <div className="section_formulario5">
                            <div className="input_anexo">
                                <label htmlFor="">Anexo</label>
                                <div className="input-icons input-anexo">
                                    <label htmlFor="file">

                                        <Icon className="icon" icon="bi:cloud-arrow-up" />

                                    </label>
                                    <input type="file" id="file" name="file" />
                                </div>
                            </div>
                            <div className="input_status_chamado">
                                <label htmlFor="file">Status Chamado</label>
                                <div className="input-icons input_status">

                                    <Icon className="icon_select" icon="el:ok-circle" />

                                    <select
                                        className="selecao input-field-medium"
                                        name="status"
                                        id="status"
                                    >
                                        <option value="aberto">Aberto</option>
                                        <option value="em andamento">Em andamento</option>
                                        <option value="finalizado">Finalizado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="icones">
                           <Btn_submit_cancel_squad></Btn_submit_cancel_squad>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ChamadoCadastro;
