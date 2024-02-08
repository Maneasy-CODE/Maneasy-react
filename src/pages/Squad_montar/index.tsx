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
import { useEffect, useState } from "react";
import api from "../../utils/api";



function Squadmontar() {

    const [nomeProjeto, setNomeProjeto] = useState<string>("");
    const [nomeId, setNomeId] = useState<any>(0);
    const [calendarioCriacao, setCalendarioCriacao] = useState<any>();
    const [calendarioInicio, setCalendarioInicio] = useState<any>();
    const [calendarioTermino, setCalendarioTermino] = useState<any>();
    const [objetoProjeto, setObjetoProjeto] = useState<string>("");


    function exibirDetalhesSquad(){
        api.get("squads")
        .then((response: any) => {
            console.log(response);
            alert("Listado com sucesso!");
        })
        .catch((error: any) => {
            console.log(error);
            alert("Falha ao listar");
        })
    };

    useEffect(()=>{
        exibirDetalhesSquad();
    },[])
    return (
        <main className="squad_montar">
            <Menu/>
            <section className="container">

                <div className="section_titulo">
                    <img src={bolinha_titulo} alt="" />
                    <h1>Squad</h1>
                </div>

                <form>

                    <div className="form_id">
                        <div className="section_pesquisa_resultado_input_id">
                            <label htmlFor="id">ID</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="ic:outline-badge" />
                                <input name="id" className="input-field" type="number" value={nomeId}/>
                            </div>
                        </div>

                        <div className="section_nome_projeto">
                            <div className="section_pesquisa_resultado_input_pesquisa">
                                <label htmlFor="nome_projeto">Nome do Projeto</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="la:project-diagram" />
                                    <input name="nome_projeto" className="input-field" type="text" value={nomeProjeto}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form_date">
                        <div className="form_criacao_inicio_termino">
                            <div className="form_date_criacao_inicio_termino">
                                <label htmlFor="criacao">Criação</label>
                                <div className="input-icons">
                                    <Icon className="icon icon_calendario" icon="zondicons:calendar" />
                                    <input name="criacao" className="input-field" type="date" value={calendarioCriacao}/>
                                </div>
                            </div>
                        </div>
                        <div className="form_criacao_inicio_termino">
                            <div className="form_date_criacao_inicio_termino">
                                <label htmlFor="inicio">Ínicio</label>
                                <div className="input-icons">
                                    <Icon className="icon icon_calendario" icon="zondicons:calendar" />
                                    <input name="inicio" className="input-field" type="date" value={calendarioInicio}/>
                                </div>
                            </div>
                        </div>
                        <div className="form_criacao_inicio_termino">
                            <div className="form_date_criacao_inicio_termino">
                                <label htmlFor="termino">Término</label>
                                <div className="input-icons">
                                    <Icon className="icon icon_calendario" icon="zondicons:calendar" />
                                    <input name="termino" className="input-field" type="date" value={calendarioTermino}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section_objetivo_projeto">
                        <div className="section_objetivo_projeto_label_textarea">
                            <label htmlFor="objetivo_projeto">Objetivo do Projeto</label>
                            <div>
                                <textarea id="objetivo_projeto" name="objetivo_projeto" rows={4} cols={50} value={objetoProjeto}></textarea>
                            </div>
                        </div>

                    </div>
                    <h2 className="titulo_lista_prof">Lista de profissionais</h2>
                    <div className="section_pesquisa espacamento">
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="Pesquisa">Pesquisa</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="ic:outline-badge" />
                                <input name="Pesquisa" className="input-field" type="number" placeholder="Pesquise pelo nome o chapa" />
                            </div>
                        </div>

                        <Link to={"#"} className="section_pesquisa_btn"><img src={lupa} alt="" /></Link>

                    </div>
                    <div className="section_resultado">
                        <div className="tabela_scroll">
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010101</p>

                                    <p className="section_resultado_dados_nome">Claudio Francisco Porto</p>
                                </div>

                                <Link to={""} className="section_resultado_dados_btn"><img src={btn_confirmar}
                                    alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010102</p>

                                    <p className="section_resultado_dados_nome">Gustavo Luiz Miranda</p>
                                </div>

                                <Link to={""} className="section_resultado_dados_btn"><img src={btn_confirmar}
                                    alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010103</p>

                                    <p className="section_resultado_dados_nome">Hosmairys Yuriannys Holder Rodriguez</p>
                                </div>

                                <Link to={""} className="section_resultado_dados_btn"><img src={btn_squad}
                                    alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010104</p>

                                    <p className="section_resultado_dados_nome">Jhonatan Pereira Ferreira</p>
                                </div>

                                <Link to={""} className="section_resultado_dados_btn"><img src={btn_squad}
                                    alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010105</p>

                                    <p className="section_resultado_dados_nome">Lucas Oliveira</p>
                                </div>

                                <Link to={""} className="section_resultado_dados_btn"><img src={btn_squad}
                                    alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010106</p>

                                    <p className="section_resultado_dados_nome">Priscila Laurentino</p>
                                </div>

                                <Link to={""} className="section_resultado_dados_btn"><img src={btn_squad}
                                    alt="" />
                                </Link>
                            </div>
                            <div className="section_resultado_dados">
                                <div>
                                    <p className="section_resultado_dados_id">010107</p>

                                    <p className="section_resultado_dados_nome">Marcel de Lima Brito</p>
                                </div>

                                <Link to={""} className="section_resultado_dados_btn"><img src={btn_squad}
                                    alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </form>


            </section>

        </main >
    );
}

export default Squadmontar;