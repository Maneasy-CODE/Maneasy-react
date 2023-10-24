// IMPORT DO CSS
import "./style.css"
// IMPORT DOS ICON
import { Icon } from '@iconify/react';
// IMPORT DE COMPONENTES
import Menu from '../../components/Menu';
import ListaSquadCadastros from "../../components/ListaSquadCadastro";
// IMPORT DAS IMAGENS
import bolinha_titulo from "../../assets/images/icone_titulo.svg";
import lupa from "../../assets/images/btn_pesquisar.svg";
import { Link } from "react-router-dom";



function SquadCadastros() {
    const listaSquadCadastro: any =
        [
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
            {
                id: 10101010,
                tipo: "Projeto",
                nome: "Atualização de Cadastro para MySQL"
            },
        ]

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
                                <input name="Chapa" className="input-field" type="number" placeholder="Digite o nome da chapa"/>
                            </div>
                        </div>
                        <div>
                            <p>ou</p>
                        </div>
                        <div className="section_pesquisa_resultado_input">
                            <label htmlFor="Consultar">Consultar</label>
                            <div className="input-icons">
                                <Icon className="icon" icon="mingcute:user-4-fill" />
                                <input name="Consultar" className="input-field" type="text" placeholder="Digite o nome do serviço"/>
                            </div>
                        </div>
                        <Link to={"#"} className="section_pesquisa_btn">
                            <img src={lupa} alt="" />
                        </Link>
                    </div>
                    <div className="section_resultado">
                        <h2>Lista de Serviços</h2>
                        <div className="tabela_scroll">
                            <table>
                                {
                                    listaSquadCadastro.map((cadastro: any) => {
                                        return <tr key={cadastro.id}>
                                            <ListaSquadCadastros
                                                id={cadastro.id}
                                                tipo={cadastro.tipo}
                                                nome={cadastro.nome}
                                            />
                                        </tr>
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );

}

export default SquadCadastros;