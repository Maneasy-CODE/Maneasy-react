// estilição
import "./style.css";
import { Icon } from "@iconify/react";
import Menu from "../../components/Menu";
import Bolinha from "../../assets/images/icone_titulo.svg"
import Pesquisar from "../../assets/images/btn_pesquisar.svg"


//rotas
import { Link } from "react-router-dom";

function ChamadoConsulta() {
    return (
        <main id="chamado_consulta">
            <Menu />
            <section>
                <div className="container">
                    <div className="section_titulo">
                        <img src={Bolinha} alt="" />
                        <h1>Chamados</h1>
                    </div>
                    <div className="consulta">
                        <Link className="button-cadastrar" to={""}>Cadastrar</Link>
                        <Link className="button-consultar" to={""}>Consultar</Link>
                    </div>
                    <div className="pesquisas">
                        <div className="input_id">
                            <label htmlFor="id">ID</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="ic:outline-badge" />
                                <input name="id" className="input-field" type="text" />
                            </div>
                        </div>
                        <div className="ou">
                            <p>ou</p>
                        </div>
                        <div className="input_nome">
                            <label htmlFor="Nome">Nome</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="mingcute:user-4-fill" />
                                <input name="Nome" className="input-field" type="text" />
                            </div>
                        </div>
                        <div>
                            <Link className="section_consulta_chamado_btn" to={""}>
                                <img src={Pesquisar} alt="" />
                            </Link>
                        </div>
                    </div>
                    <section className="section_table">
                        <h2>Lista de Projetos</h2>
                        <div className="tabela_scroll">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Atualização do Cadastro para MySQL</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Implementação do onboarding</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Implementação do sistema de organiza...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">
                                            Atualização do Cadastro de Clientes par...
                                        </td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Criação do novo sistema de gerenciame...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Criação do novo sistema de gerenciame...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Atualização do Cadastro para MySQL</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Implementação do onboarding</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Implementação do sistema de organiza...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">
                                            Atualização do Cadastro de Clientes par...
                                        </td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Criação do novo sistema de gerenciame...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Criação do novo sistema de gerenciame...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Atualização do Cadastro para MySQL</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Implementação do onboarding</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Implementação do sistema de organiza...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">
                                            Atualização do Cadastro de Clientes par...
                                        </td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Criação do novo sistema de gerenciame...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="c1">01010101</td>
                                        <td className="c2">Criação do novo sistema de gerenciame...</td>
                                        <td className="c3">
                                            <a href="../chamado_atualizar/chamado_atualizar.html">
                                                <img src="../assets/images/btn_editar.svg" />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </section>
        </main>

    )


}

export default ChamadoConsulta;