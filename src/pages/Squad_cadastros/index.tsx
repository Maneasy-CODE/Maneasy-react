// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DE COMPONENTES
import Menu from '../../components/Menu';
import ListaSquadCadastros from "../../components/Lista_squad_cadastros";
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";



function SquadCadastros() {
    return (
        <main id="squad_atualizar">
            <Menu></Menu>
            <section className="container">
                <div className="section_titulo">
                    <img src={bolinha_titulo} alt="" />
                    <h1>Squad</h1>
                </div>
                <div className="section_pesquisa_resultado">
                    <div className="section_pesquisa">
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="Chapa">Chapa</label>
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
                    <div className="section_resultado">

                        <h2>Lista de Serviços</h2>

                        <ListaSquadCadastros></ListaSquadCadastros>

                    </div>
                </div>
            </section>
        </main >
    );

}

export default SquadCadastros;