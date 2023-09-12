//estilo
import "./style.css"

//imagens
import imagemIconeTitulo from "./../../assets/images/icone_titulo.svg"
import imagemEditar from "../../assets/images/btn_editar.svg"
import imagemPesquisar from "./../../assets/images/btn_pesquisar.svg"

//rotas
import Menu from './../../components/Menu'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";


function DemandaConsulta() {
    return (
        <main id="demanda_consulta">
            <Menu/>
            <section>
                <div className="container-grid">
                    <div className="conteudo">
                        <div className="cadastrar">
                            <img src={imagemIconeTitulo} alt="" />
                            <h1>Demandas</h1>
                        </div>
                        <div className="buttons-grid">
                            <Link to={""} className="button-cadastrar">Cadastrar</Link>
                            <Link to={""} className="button-consultar">Consultar</Link>
                        </div>

                        <div className="info-grid">
                            <div className="chapa">
                                <span className="text-span">Chapa</span>
                                <div className="input-icons">
                                    <Icon className="icon" icon="ic:outline-badge"></Icon>
                                    <input className="input-field" name="Chapa" type="text" />
                                </div>
                            </div>

                            <span>ou</span>

                            <div className="nome">
                                <span className="text-span">Nome</span>
                                <div className="input-icons">
                                    <Icon className="icon" icon="mingcute:user-4-fill"></Icon>
                                    <input className="input-field" name="Nome" type="text" />
                                </div>
                            </div>
                            <div className="icon-lupa">
                                <Link to="#"><img src={imagemPesquisar} alt="" /></Link>
                            </div>
                        </div>

                        <div className="lista-demandas">
                            <h2>Lista de Demandas</h2>
                            <div className="scroll">
                                <ul className="num-demanda">
                                    <li>01010101</li>
                                    <li className="alinhamento-texto">Atualização do Cadastro para MySQL</li>
                                    <Link to={""}><img src={imagemEditar} alt=""/></Link>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default DemandaConsulta