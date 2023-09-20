/* Importar css do componente Menu */
import "./style.css";
import "../../index.css";

import { Icon } from '@iconify/react';
import logo_branca from "../../assets/images/logo_branca.svg";
import { Link } from "react-router-dom"


function Menu() {
    return (
        <aside id="aside_menu">
            <nav className="nav_btn_menu">

                <img className="aside_logo" src={logo_branca} alt="Logo Maneasy" />

                <Link to={""}>
                    <div className="icon_menu">
                        <Icon icon="ph:chart-bar-bold" />
                    </div>
                    Dashboard
                </Link>

                <Link to={""}>
                    <div className="icon_menu">
                        <Icon icon="ion:people-circle" />
                    </div>

                    Profissionais
                </Link>

                <Link to={""}>
                    <div className="icon_menu">
                        <Icon icon="la:project-diagram" />
                    </div>
                    Projetos
                </Link>

                <Link to={""}>
                    <div className="icon_menu">
                        <Icon icon="mdi:clipboard-edit-outline" />
                    </div>
                    Demandas
                </Link>

                <Link to={""}>
                    <div className="icon_menu">
                        <Icon icon="mdi:bell-alert-outline" />
                    </div>
                    Chamados
                </Link>

                <Link to={""}>
                    <div className="icon_menu">
                        <Icon icon="mdi:people-group" />
                    </div>

                    Squad
                </Link>

                <Link to={""}>
                    <div className="icon_menu">
                        <Icon icon="mdi:file-report-outline" />
                    </div>
                    Consultas
                </Link>

            </nav>

            <footer id="footer_menu">
                <Link to={""}>
                    <div className="icon_footer">
                        <Icon icon="iconamoon:exit-bold" />
                    </div>
                    Sair
                </Link>
            </footer>
        </aside>
    )

}

export default Menu;