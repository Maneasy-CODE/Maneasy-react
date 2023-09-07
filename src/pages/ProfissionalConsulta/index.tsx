import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização
import "./style.css"

import { Icon } from '@iconify/react';

function ProfissionalConsulta() {

    return (

        <>
            <main id="profissional_consulta">
                <section className="conteudo_princiapal">
                    <div className="container_grid">
                        <div className="section_titulo">
                            <img src="../assets/images/bolinha_azul.svg" alt="circulo azul" />
                            <h1>Profissionais</h1>
                        </div>
                        <div className="conteudo">
                            <nav className="nav_cad_cons">
                                <a
                                    className="btn_cad"
                                    href="../profissional_cadastro/profissional_cadastro.html"
                                >
                                    Cadastrar
                                </a>
                                <a className="btn_cons" href="#">
                                    Consultar
                                </a>
                            </nav>
                            <div className="section_pesquisa">
                                <div className="section_pesquisa_resultado_input">
                                    <label htmlFor="Chapa">Chapa</label>
                                    <div className="input-icons">
                                        <Icon icon="ic:outline-badge" />

                                        <input name="Chapa" className="input-field" type="number" />
                                    </div>
                                </div>
                                <div>
                                    <p>ou</p>
                                </div>
                                <div className="section_pesquisa_resultado_input">
                                    <label htmlFor="Consultar">Consultar</label>
                                    <div className="input-icons">
                                        <Icon icon="mingcute:user-4-fill" />

                                        <input name="Consultar" className="input-field" type="text" />
                                    </div>
                                </div>
                                <a href="" className="section_pesquisa_btn">
                                    <img src="../assets/images/btn_pesquisar.svg" alt="" />
                                </a>
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
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">
                                                    Hosmairys Yuriannys Holder Rodriguez
                                                </td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Gustavo Luiz Miranda</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Claudio Francisco Porto</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Jhonatan Pereira Ferreira</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Marcel de Lima Brito</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Lucas Oliveira</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Priscila Laurentino</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">
                                                    Hosmairys Yuriannys Holder Rodriguez
                                                </td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Gustavo Luiz Miranda</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Claudio Francisco Porto</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Jhonatan Pereira Ferreira</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Marcel de Lima Brito</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="numero_chapa">01010101</td>
                                                <td className="nome">Lucas Oliveira</td>
                                                <td className="lapis_lista">
                                                    <a href="../profissional_atualizar/profissional_atualizar.html">
                                                        <img src="../assets/images/btn_editar.svg" alt="" />
                                                    </a>
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
        </>

    )
}

export default ProfissionalConsulta;