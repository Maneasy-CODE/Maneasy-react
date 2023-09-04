//estilização
import "./style.css"

//Hoots
import { Link } from "react-router-dom"

// IMPORTE DE IMAGENS
import IconTitulo from "../../assets/images/icone_titulo.svg";

// Import component:
import { Icon } from '@iconify/react';
import Btn_submit_cancel_squad from "../../components/Btn_submit_cancel_squad";
import Menu from "../../components/Menu";




function ChamadoAtualizar() {

    return (

        <main id="demanda_atualizar">
            <Menu />
            <section>
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="cadastrar">
                            <img src={IconTitulo} alt="" />
                            <h1>Demandas</h1>
                        </div>
                        <div className="buttons-grid">
                            <a href="#" className="button-cadastrar">
                                Atualizar
                            </a>
                            <a
                                href="../demanda_consulta/demanda_consulta.html"
                                className="button-consultar"
                            >
                                Consultar
                            </a>
                        </div>
                        <div className="demanda">
                            <span>Nome da Demanda</span>
                            <div className="demanda-cadastrar input-icons">

                                <Icon icon="mdi:clipboard-edit-outline" />

                                <input className="input-field" name="nome-demanda" type="text" />
                            </div>
                        </div>
                        <div className="datas">
                            <div className="criacao">
                                <span>Criação</span>
                                <div className="data-conte input-icons">

                                    <Icon icon="bx:calendar" />

                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                            <div className="inicio">
                                <span>Ínicio</span>
                                <div className="data-conte input-icons">

                                    <Icon icon="bx:calendar" />

                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                            <div className="termino">
                                <span>Término</span>
                                <div className="data-conte input-icons">

                                    <Icon icon="bx:calendar" />

                                    <input className="input-field" name="criacao" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="objetivo-demanda">
                            <div className="objetivo-demanda">
                                <span>Objetivo demanda</span>
                                <textarea
                                    className="objetivo-form"
                                    spellCheck="false"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={10}
                                    defaultValue={
                                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas commodi in qui ex provident minima repellendus nostrum odio quos ut asperiores repudiandae placeat distinctio, maiores corrupti ullam fuga nam optio."
                                    }
                                />
                            </div>
                            <div id="barra-rolamento" />
                        </div>
                        <div className="objetivo-demanda">
                            <div className="objetivo-demanda">
                                <span>Consultoria na demanda</span>
                                <textarea
                                    className="objetivo-form"
                                    spellCheck="false"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={10}
                                    defaultValue={
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, cupiditate. Quo iste magnam nostrum adipisci! Odit suscipit sit laudantium. Perspiciatis rem, deleniti quas libero ipsa officiis corporis laboriosam temporibus quo."
                                    }
                                />
                            </div>
                            <div id="barra-rolamento" />
                        </div>
                        <div className="progresso-demanda">
                            <div className="orcamento-demanda">
                                <span>Orçamento de demanda </span>
                                <div className="data-conte input-icons">

                                    <Icon icon="bx:calendar" />

                                    <input className="input-field" name="criacao" type="text" />
                                </div>
                            </div>
                            <div className="tempo-demanda">
                                <span>Tempo de demanda</span>
                                <div className="data-conte input-icons">

                                    <Icon icon="bx:calendar" />

                                    <input className="input-field" name="criacao" type="text" />
                                </div>
                            </div>
                            <div className="select_status">
                                <span>Status da Demanda</span>
                                <div className="select-icons">

                                    <Icon icon="el:ok-sign" />

                                    <select className="data-conte" name="status" id="">
                                        <option value="">Aberto</option>
                                        <option value="">Em andamento</option>
                                        <option value="">Finalizado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <Btn_submit_cancel_squad />
                    </div>
                </div>
            </section>
        </main>

    )
}

export default ChamadoAtualizar;