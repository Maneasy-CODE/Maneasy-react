//estilização
import "./style.css"

//rotas
import { Link } from "react-router-dom";
import Menu from "../../components/Menu"

//imagens
import bolinha_azul from "../../assets/images/bolinha_azul.svg"
import imagemPesquisar from "../../assets/images/btn_pesquisar.svg"

import { Icon } from '@iconify/react';
import LinhaProfissional from "../../components/LinhaProfissional"

function ProfissionalConsulta() {
    const listaProfissional: any = [
        {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        }, {
            chapa: 1010101010,
            nome: "Priscila Laurentino"
        },
    ]
    return (

        <main id="profissional_consulta" className="main_profissional_consulta">
            <Menu></Menu>
            <section className="conteudo_princiapal">
                <div className="container_grid">
                    <div className="section_titulo">
                        <img src={bolinha_azul} alt="circulo azul" />
                        <h1>Profissionais</h1>
                    </div>
                    <div className="conteudo">
                        <nav className="nav_cad_cons">
                            <Link to={"/pagina/profissional/cadastro"} className="btn_cad">Cadastrar</Link>
                            <Link to={""} className="btn_cons">Consultar</Link>
                        </nav>
                        <div className="section_pesquisa">
                            <div className="section_pesquisa_resultado_input">
                                <label htmlFor="Chapa">Chapa</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="ic:outline-badge" />
                                    <input id="Chapa" name="Chapa" className="input-field" type="number" placeholder="Digite a chapa do profissional"/>
                                </div>
                            </div>
                            <div>
                                <p>ou</p>
                            </div>
                            <div className="section_pesquisa_resultado_input">
                                <label htmlFor="Nome">Nome</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="mingcute:user-4-fill" />
                                    <input id="Nome" name="Nome" className="input-field" type="text" placeholder="Digite o nome do profissional"/>
                                </div>
                            </div>
                            <Link to={""} className="section_pesquisa_btn">
                                <img src={imagemPesquisar} alt="" />
                            </Link>
                        </div>
                        <section className="secao_lista">
                            <h2>Lista de Profissionais</h2>
                            <div className="tabela_scroll">
                                <table>
                                    <tbody>
                                        {
                                            listaProfissional.map((profissional: any) => {
                                                return <tr key={profissional.chapa}>
                                                    <LinhaProfissional
                                                        chapa={profissional.chapa}
                                                        nome={profissional.nome}
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

    )
}

export default ProfissionalConsulta;