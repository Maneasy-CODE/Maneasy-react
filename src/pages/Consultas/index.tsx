// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DOS COMPONENTES
import Menu from '../../components/Menu';
import Lista_consulta from "../../components/Lista_consulta";
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";
// IMPORT REACT ROUTER DOM
import { Link } from "react-router-dom";


function Consultas() {
    const listaConsulta: any = [
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
        {
            id: 1010,
            nome: "Projeto"
        },
    ]
    return (
        <main id="consulta" className="container_consulta">
            <Menu></Menu>
            <section className="section_pesquisa">
                <div className="container">
                    <div className="conteudo">
                        <div className="section_titulo">
                            <img src={bolinha_titulo} alt="" />
                            <h1>Consultas</h1>
                        </div>
                        <div className="section_pesquisa">
                            <div className="section_pesquisa_resultado_input">
                                <label htmlFor="Chapa">ID</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="ic:outline-badge" />
                                    <input name="Chapa" className="input-field" type="number" placeholder="Digite o ID do projeto" required />
                                </div>
                            </div>
                            <div className="position_ou">
                                <p>ou</p>
                            </div>
                            <div className="section_pesquisa_resultado_input">
                                <label htmlFor="Consultar">Consultar</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="mingcute:user-4-fill" />
                                    <input name="Consultar" className="input-field" type="text" placeholder="Digite o nome da consulta" />
                                </div>
                            </div>
                            <Link to={"#"} className="section_pesquisa_btn">
                                <img src={lupa} alt="" />
                            </Link>
                        </div>
                        <section className="section_table">
                            <h2>Consultas</h2>
                            <div className="tabela_scroll">
                                <table>
                                    <tbody>
                                        {
                                            listaConsulta.map((consulta: any) => {
                                                return <tr key={consulta.id}>
                                                    <Lista_consulta
                                                        id={consulta.id}
                                                        nome={consulta.nome}
                                                    />
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Consultas;