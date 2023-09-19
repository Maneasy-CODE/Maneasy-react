/* Importar css do componente Menu */
import "./style.css";
import "../../index.css";

import { Icon } from '@iconify/react';
import logo_branca from "../../assets/images/logo_branca.svg";


function Menu() {
    return (
        <aside id="aside_menu">


            <nav className="nav_btn_menu">

                <img className="aside_logo" src={logo_branca} alt="Logo Maneasy" />

                <a href="#">
                    <div className="icon_menu">
                        <Icon icon="ph:chart-bar-bold" />
                    </div>
                    Dashboard
                </a>

                <a href="#">
                    <div className="icon_menu">
                        <Icon icon="ion:people-circle" />
                    </div>

                    Profissionais
                </a>

                <a href="#">
                    <div className="icon_menu">
                        <Icon icon="la:project-diagram" />
                    </div>
                    Projetos
                </a>

                <a href="#">
                    <div className="icon_menu">
                        <Icon icon="mdi:clipboard-edit-outline" />
                    </div>
                    Demandas
                </a>

                <a href="#">
                    <div className="icon_menu">
                        <Icon icon="mdi:bell-alert-outline" />
                    </div>
                    Chamados
                </a>

                <a href="#">
                    <div className="icon_menu">
                        <Icon icon="mdi:people-group" />
                    </div>

                    Squad
                </a>

                <a href="#">
                    <div className="icon_menu">
                        <Icon icon="mdi:file-report-outline" />
                    </div>
                    Consultas
                </a>

            </nav>

            <footer id="footer_menu">
                <a href="#">
                    <div className="icon_footer">
                        <Icon icon="iconamoon:exit-bold" />
                    </div>
                    Sair
                </a>
            </footer>

        </aside>

    )

}

export default Menu;