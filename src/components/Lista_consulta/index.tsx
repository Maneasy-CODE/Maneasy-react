import './style.css'
// IMPORT DE IMAGEM
import impressora from "../../assets/images/btn_impressora.svg";
import { Link } from 'react-router-dom';

function Lista_consulta(props: any) {
    return (
        <tr id="consulta" className='consulta_lista'>
            <td className="linha_consultas_id">{props.id}</td>
            <td className="linha_consultas_tipo">{props.nome}</td>
            <select className="linha_consultas_status">
                <option value="ativos">Ativos</option>
                <option value="finalizados">Finalizados</option>
                <option value="todos">Todos</option>
            </select>
            <td className='button_consulta'>
                {" "}
                <Link to={"#"}>
                    <img src={impressora} />
                </Link>
            </td>
        </tr>
    );
}

export default Lista_consulta;