import './style.css'
// IMPORT DE IMAGEM
import impressora from "../../assets/images/btn_impressora.svg";

function Consulta_status() {
    return (
        <main id="consulta">
            <div className="lista_consultas">
                <div className="linha_consultas">
                    <p className="linha_consultas_id">0101</p>
                    <p className="linha_consultas_tipo">Projetos</p>
                    <select className="linha_consultas_status">
                        <option value="ativos">Ativos</option>
                        <option value="finalizados">Finalizados</option>
                        <option value="todos">Todos</option>
                    </select>
                    <button>
                        {" "}
                        <a href="">
                            <img src={impressora} alt="" />
                        </a>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Consulta_status;