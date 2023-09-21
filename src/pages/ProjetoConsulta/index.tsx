//estilo
import "./style.css";

//rotas
import { Link } from "react-router-dom";
import Menu from "../../components/Menu"

import imagemIconeTitulo from "../../assets/images/icone_titulo.svg"
import imagemPesquisar from "../../assets/images/btn_pesquisar.svg"
import { Icon } from '@iconify/react';
import LinhaProjeto from "../../components/LinhaProjeto";


function ProjetoConsulta() {
    const listaProjetos: any = [
        {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        }, {
            id: 1010101010,
            nome: "Criar Menu da Loja"
        },
    ]
    return (
        <div id="projeto_consulta">
            <main>
                <Menu />
                <section className="conteudo">
                    <div className="container-grid">
                        <div className="section_titulo">
                            <img src={imagemIconeTitulo} alt="" />
                            <h1>Projeto</h1>
                        </div>
                        <div className="buttons-grid">
                            <Link to={""} className="button-cadastrar">Cadastrar</Link>
                            <Link to={""} className="button-consultar">Consultar</Link>
                        </div>

                        <div className="pesquisas">

                            <div className="input_id">
                                <label htmlFor="id">ID</label>
                                <div className="input-icons_pesquisa">
                                    <Icon className="icon" icon="ic:outline-badge"></Icon>
                                    <input name="id" className="input-field_pesquisa" type="text" placeholder="Digite o ID do projeto" required/>
                                </div>
                            </div>

                            <div className="ou">
                                <p>ou</p>
                            </div>

                            <div className="input_nome">
                                <label htmlFor="Nome">Nome</label>
                                <div className="input-icons_pesquisa">
                                    <Icon className="icon" icon="mingcute:user-4-fill"></Icon>
                                    <input name="Nome" className="input-field_pesquisa" type="text" placeholder="Digite o nome do projeto" required/>
                                </div>
                            </div>
                            <div>
                                <Link to={""} className="section_consulta_chamado_btn"><img src={imagemPesquisar} alt="" /></Link>
                            </div>
                        </div>

                        <div className="lista-projetos">
                            <h2>Lista de Projetos</h2>
                            <div className="container_lista_projetos">
                            <table>
                                <tbody>
                                    {
                                        listaProjetos.map((chamado: any) => {
                                            return <tr key={chamado.id}>
                                                <LinhaProjeto
                                                    id = {chamado.id}
                                                    nome = {chamado.nome}
                                                />
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default ProjetoConsulta;