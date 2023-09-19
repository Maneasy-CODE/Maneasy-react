import "./style.css"
import btn_squad from "../../assets/images/btn_squad.svg";
import btn_confirmar from "../../assets/images/btn_confirmar.svg";
import btn_cancelar from "../../assets/images/btn_cancelar.svg";

function Btn_submit_cancel_squad() {
    return (
        <main id="demanda_cadastro">
            <div className="footer-options">
                <a href="../squad_cadastro/squad_cadastro.html">
                    <img src={btn_squad} alt="" />
                </a>
                <div>
                    <a href="">
                        <img src={btn_confirmar} alt="" />
                    </a>
                    <a href="">
                        <img src={btn_cancelar} alt="" />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Btn_submit_cancel_squad;
