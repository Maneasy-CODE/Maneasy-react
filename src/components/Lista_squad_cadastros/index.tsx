import "./style.css";
import btn_squad from "../../assets/images/btn_squad.svg";

function ListaSquadCadastros() {
    return (
        <>
            <main id="squad_atualizar">
                <div className="lista_consultas">
                    <div className="section_resultado_dados">
                        <div>
                            <p className="section_resultado_dados_id">010101</p>
                            <p className="section_resultado_dados_tipo">Projeto</p>
                            <p className="section_resultado_dados_nome">
                                Implementação do onboarding{" "}
                            </p>
                        </div>
                        <a
                            href="../squad_cadastro/squad_cadastro.html"
                            className="section_resultado_dados_btn"
                        >
                            <img src={btn_squad} alt="" />
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ListaSquadCadastros;