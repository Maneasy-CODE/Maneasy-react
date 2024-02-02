// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DOS COMPONENTES
import Menu from '../../components/Menu';
import Lista_consulta from "../../components/LinhaConsulta";
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";
// IMPORT REACT ROUTER DOM
import { Link } from "react-router-dom";


function Consultas() {
    const listaConsulta: any = [
        {
            nome_profissional: "Nome Profissional Exemplo",
            nome_projeto: "Nome Projeto Exemplo",
            tipo: "Projeto",
            status: "Em andamento"

        },

        {
            nome_profissional: "Nome Profissional Exemplo",
            nome_projeto: "Nome Demanda Exemplo",
            tipo: "Demanda",
            status: "Em andamento"

        },

        {
            nome_profissional: "Nome Profissional Exemplo",
            nome_projeto: "Nome Chamado Exemplo",
            tipo: "Chamado",
            status: "Em andamento"

        },

        {
            nome_profissional: "Nome Profissional Exemplo",
            nome_projeto: "-",
            tipo: "-",
            status: "-"

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

                        <div className="pesquisa_and_filtro">

                            <div className="section_ID_Consultar">
                                <div className="input_nome">
                                    <label htmlFor="Pesquisa">Pesquisa</label>
                                    <div className="input-icons">
                                        <input name="Pesquisa" className="input-field" type="text" placeholder="Digite o nome do chamado ou ID" required />
                                    </div>
                                </div>
                                <Link to={"#"} className="section_pesquisa_btn">
                                    <img src={lupa} alt="" />
                                </Link>
                            </div>




                            <div className="pesquisa_tipo">
                                <label htmlFor="filtro" className="filtro">Filtro</label>
                                <select name="Pesquisa">
                                    <option value="projeto" className="input-field">Projeto</option>
                                    <option value="demanda" className="input-field">Demanda</option>
                                    <option value="demanda" className="input-field" >Chamado</option>
                                    <option value="disponivel" className="input-field">Disponível</option>
                                </select>
                            </div>

                        </div>

                        <section className="section_table">
                            <h2>Consultas</h2>


                            <div className="titulos_consulta">
                                <p className="linha_consultas_nome_profissional">Nome do Profissional</p>
                                <p className="linha_consultas_nome_projeto">Nome do Projeto</p>
                                <p className="linha_consultas_status">Tipo</p>
                                <p className="linha_consultas_status">Status</p>
                            </div>

                            <div className="tabela_scroll">
                                <table>
                                    <tbody>
                                        {
                                            listaConsulta.map((consulta: any) => {
                                                return <tr key={consulta.id}>
                                                    <Lista_consulta
                                                        nome_profissional={consulta.nome_profissional}
                                                        nome_projeto={consulta.nome_projeto}
                                                        tipo={consulta.tipo}
                                                        status={consulta.status}

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