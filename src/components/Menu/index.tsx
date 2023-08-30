/* Importar css do componente Menu */
import "./style.css";
import "../../index.css";

import { Icon } from '@iconify/react';
import logo_branca from "../../assets/images/logo_branca.svg";


function Menu() {
    return (
        <aside id="aside_menu">

            <img className="aside_logo" src={logo_branca} alt="Logo Maneasy" />

            <nav className="nav_btn_menu">
                <a id="input_dashboard" href="../dashboard/dashboard.html">
                    <Icon icon="ph:chart-bar-bold" />
                    Dashboard
                </a>
                <a href="../profissional_cadastro/profissional_cadastro.html">
                    <Icon icon="ion:people-circle" />
                    Profissionais
                </a>
                <a href="../projeto_cadastro/projeto_cadastro.html">
                    <Icon icon="la:project-diagram" />
                    Projetos
                </a>
                <a id="input_demanda" href="../demanda_cadastro/demanda_cadastro.html">
                    <Icon icon="mdi:clipboard-edit-outline" />
                    Demandas
                </a>
                <a href="../chamado_cadastro/chamado_cadastro.html">
                    <Icon icon="mdi:bell-alert-outline" />
                    Chamados
                </a>
                <a href="../squad_atualizar/squad_atualizar.html">
                    <Icon icon="mdi:people-group" />
                    Squad
                </a>
                <a href="../consulta/consulta.html">
                    <Icon icon="mdi:file-report-outline" />
                    Consultas
                </a>
            </nav>
            <footer id="footer_menu">
                <a href="../entrar/entrar.html">
                    <Icon icon="iconamoon:exit-bold" />
                    Sair
                </a>
            </footer>
        </aside>

    )

}

export default Menu;