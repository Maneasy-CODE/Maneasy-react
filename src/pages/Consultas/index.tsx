// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DOS COMPONENTES
import Menu from '../../components/Menu';
import Consulta_status from "../../components/Consulta_status";
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";



function Consultas() {
    return (
        <>
            <main id="consulta">
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
                                        <input name="Chapa" className="input-field" type="number" />
                                    </div>
                                </div>
                                <div>
                                    <p>ou</p>
                                </div>
                                <div className="section_pesquisa_resultado_input">
                                    <label htmlFor="Consultar">Consultar</label>
                                    <div className="input-icons">
                                        <Icon className="icon" icon="mingcute:user-4-fill" />
                                        <input name="Consultar" className="input-field" type="text" />
                                    </div>
                                </div>
                                <a href="" className="section_pesquisa_btn">
                                    <img src={lupa} alt="" />
                                </a>
                            </div>
                            <section className="section_table">
                                <h2>Consultas</h2>
                                <Consulta_status></Consulta_status>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

export default Consultas;