//estilização
import "./style.css"

//rotas
import { Link } from "react-router-dom";
import Menu from "../../components/Menu"
import Btn_submit_cancel_squad from "../../components/Btn_submit_cancel_squad";

//imagens
import Bolinha from "../../assets/images/icone_titulo.svg"
import { Icon } from '@iconify/react';


function DemandaCadastro() {
    return (

        <main id="demanda_cadastro" className="main_cadastro">
            <Menu/>
            <section className="section-width">
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="cadastrar">
                        <img src={Bolinha} alt="" />
                            <h1>Demandas</h1>
                        </div>
                        <div className="buttons-grid">
                            <Link className="button-cadastrar" to={"#"}>Cadastrar</Link>
                            <Link className="button-consultar" to={"#"}>Consultar</Link>
                        </div>
                        <div className="demanda">
                            <span>Nome da Demanda</span>
                            <div className="demanda-cadastrar input-icons">
                                <Icon className="icon" icon="mdi:clipboard-edit-outline"/>
                                <input className="input-field" name="nome-demanda" type="text" />
                            </div>
                        </div>
                        <div className="datas">
                            <div className="criacao">
                                <span>Criação</span>
                                <div className="data-conte input-icons">
                                <Icon className="icon" icon="bx:calendar"/>
                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                            <div className="inicio">
                                <span>Ínicio</span>
                                <div className="data-conte input-icons">
                                <Icon className="icon" icon="bx:calendar"/>
                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                            <div className="termino">
                                <span>Término</span>
                                <div className="data-conte input-icons">
                                <Icon className="icon" icon="bx:calendar"/>
                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="objetivo-demanda">
                            <span>Objetivo de demanda</span>
                            <textarea
                                className="objetivo-form"
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                defaultValue={""}
                            />
                        </div>
                        <div className="progresso-demanda">
                            <div className="orcamento-demanda">
                                <span>Orçamento de demanda</span>
                                <div className="data-conte">
                                <Icon className="icon" icon="bx:calendar"/>
                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                            <div className="tempo-demanda">
                                <span>Tempo de demanda</span>
                                <div className="data-conte">
                                <Icon className="icon" icon="bx:calendar"/>
                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                            <div className="select_status">
                                <span>Status da Demanda</span>
                                <div className="select-icons">
                                <Icon className="icon" icon="el:ok-sign"/>
                                    <select className="data-conte" name="status" id="">
                                        <option value="">Aberto</option>
                                        <option value="">Em andamento</option>
                                        <option value="">Finalizado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
        	            <Btn_submit_cancel_squad/>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default DemandaCadastro