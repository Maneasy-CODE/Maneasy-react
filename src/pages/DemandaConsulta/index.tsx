//estilo
import "./style.css"

//imagens
import imagemIconeTitulo from "./../../assets/images/icone_titulo.svg"
import imagemPesquisar from "./../../assets/images/btn_pesquisar.svg"

//rotas
import Menu from './../../components/Menu'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

import Demanda_consulta_status from "../../components/Demanda_consulta_status";


function DemandaConsulta() {

    const listaDemandas: any = [
        {
            id: 1010101010,
            descricao: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            descricao: "Implementação do onboarding"
        }, {
            id: 1010101010,
            descricao: "Implementação do sistema de organiza..."
        }, {
            id: 1010101010,
            descricao: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            descricao: "Implementação do onboarding"
        }, {
            id: 1010101010,
            descricao: "Implementação do sistema de organiza..."
        },  {
            id: 1010101010,
            descricao: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            descricao: "Implementação do onboarding"
        }, {
            id: 1010101010,
            descricao: "Implementação do sistema de organiza..."
        }, {
            id: 1010101010,
            descricao: "Atualização do Cadastro para MySQL"
        }, {
            id: 1010101010,
            descricao: "Implementação do onboarding"
        }, {
            id: 1010101010,
            descricao: "Implementação do sistema de organiza..."
        },
    ]

    return (
        <main id="demanda_consulta">
            <Menu />
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
                                    <input className="input-field" name="Chapa" type="text" placeholder="Digite o nome da chapa" required/>
                                </div>
                            </div>

                            <span>ou</span>

                            <div className="nome">
                                <span className="text-span">Nome</span>
                                <div className="input-icons">
                                    <Icon className="icon" icon="mingcute:user-4-fill"></Icon>
                                    <input className="input-field" name="Nome" type="text" placeholder="Digite o nome da demanda" required/>
                                </div>
                            </div>
                            <div className="icon-lupa">
                                <Link to="#"><img src={imagemPesquisar} alt="" /></Link>
                            </div>
                        </div>

                        <div className="lista-demandas">
                            <h2>Lista de Demandas</h2>
                            <div className="scroll">
                                <table>
                                    <tbody>
                                        {
                                            listaDemandas.map((demandas: any) => {
                                                return <tr key={demandas.id}>
                                                    <Demanda_consulta_status
                                                        id={demandas.id}
                                                        descricao={demandas.descricao}
                                                    />
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default DemandaConsulta