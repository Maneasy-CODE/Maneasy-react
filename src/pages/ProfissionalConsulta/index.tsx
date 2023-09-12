//estilização
import "./style.css"

//rotas
import { Link } from "react-router-dom";
import Menu from "../../components/Menu"

//imagens
import bolinha_azul from "../../assets/images/bolinha_azul.svg"
import imagemPesquisar from "../../assets/images/btn_pesquisar.svg"

import { Icon } from '@iconify/react';

function ProfissionalConsulta() {

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
                            <Link to={""} className="btn_cad">Cadastrar</Link>
                            <Link to={""} className="btn_cons">Consultar</Link>
                        </nav>
                        <div className="section_pesquisa">
                            <div className="section_pesquisa_resultado_input">
                                <label htmlFor="Chapa">Chapa</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="ic:outline-badge" />
                                    <input id="Chapa" name="Chapa" className="input-field" type="number" />
                                </div>
                            </div>
                            <div>
                                <p>ou</p>
                            </div>
                            <div className="section_pesquisa_resultado_input">
                                <label htmlFor="Nome">Nome</label>
                                <div className="input-icons">
                                    <Icon className="icon" icon="mingcute:user-4-fill" />
                                    <input id="Nome" name="Nome" className="input-field" type="text" />
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
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Priscila Laurentino</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">
                                                Hosmairys Yuriannys Holder Rodriguez
                                            </td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Gustavo Luiz Miranda</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Claudio Francisco Porto</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Jhonatan Pereira Ferreira</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Marcel de Lima Brito</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Lucas Oliveira</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Priscila Laurentino</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">
                                                Hosmairys Yuriannys Holder Rodriguez
                                            </td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Gustavo Luiz Miranda</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Claudio Francisco Porto</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Jhonatan Pereira Ferreira</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Marcel de Lima Brito</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="numero_chapa">01010101</td>
                                            <td className="nome">Lucas Oliveira</td>
                                            <td className="lapis_lista">
                                                <Link to={""}>
                                                    <img src="../assets/images/btn_editar.svg" alt="" />
                                                </Link>
                                            </td>
                                        </tr>
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