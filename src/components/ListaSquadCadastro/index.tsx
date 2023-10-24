import "./style.css";
import btn_squad from "../../assets/images/btn_squad.svg";
import { Link } from "react-router-dom";

function ListaSquadCadastros(props: any) {
    return (
        <>
            <table id="squad_atualizar_lista">
                <thead className="lista_consultas">
                    <tr className="section_resultado_dados">
                        <tr>
                            <td className="section_resultado_dados_id">{props.id}</td>
                            <td className="section_resultado_dados_tipo">{props.tipo}</td>
                            <td className="section_resultado_dados_nome">{props.nome}</td>
                        </tr>
                        <Link
                            to={"/pagina/squad/cadastro"}
                            className="section_resultado_dados_btn"
                        >
                            <img src={btn_squad} alt="" />
                        </Link>
                    </tr>
                </thead>
            </table>
        </>
    );
}

export default ListaSquadCadastros;