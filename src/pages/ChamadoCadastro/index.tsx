//estilizacacao
import "./style.css"
import { Icon } from "@iconify/react";
//rotas
import { Link } from "react-router-dom";

function ChamadoCadastro() {
    return (
        <main id="chamado_cadastro">
            <section>
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="cadastrar">
                            <img src="../assets/images/bolinha_azul.svg" alt="" />
                            <h1>Chamados</h1>
                        </div>
                        <div className="botao">
                            
                            <a
                                href="../chamado_cadastro/chamado_cadastro.html"
                                className="button_cadastrar"
                            >
                                Cadastrar
                            </a>
                            
                            <a
                                href="../chamado_consulta/chamado_consulta.html"
                                className="button_consultar"
                            >
                                Consultar
                            </a>
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

                                    <Icon className="icon" icon="el:ok-circle" />

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
                            <a href="../squad_cadastro/squad_cadastro.html">
                                <img src="../assets/images/btn_squad.svg" alt="squad" />
                            </a>
                            <div>
                                <a href="">
                                    <img src="../assets/images/btn_confirmar.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="../assets/images/btn_cancelar.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ChamadoCadastro;
