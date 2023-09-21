import "./style.css";
import { Icon } from '@iconify/react';
import entrar_logo from "../../assets/images/logo_colorida.svg";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';


function Cadastro() {
    const [chapa,setChapa] = useState<string>("");
    const [nome,setNome] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [senha,setSenha] = useState<string>("");
    const [confirmarSenha, setConfirmarSenha] = useState<string>("");

    const VerificarSenha = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (senha === confirmarSenha) {
            alert("As duas senhas se coincidem!");
        }else{
            alert("As duas senhas não se coincidem!");
        }   
    }
    
    return (
        <div id="cadastro" >
            <div className="container">     
            <nav className="nav_btn_voltar">
                <Link to={"#"}>
                    <Icon className="icon_voltar" icon="clarity:circle-arrow-solid" />
                </Link>
            </nav>
            <main>
                <section className="section_logo">
                    <div className="section_img_logo">
                        <img src={entrar_logo} alt="Logo Maneasy" />
                    </div>
                </section>
                <section className="section_esqueceu_senha">
                    <h1>
                        Cadastre<span>-se</span>
                    </h1>
                    <div className="section_input">
                        <form className="section_input" action="" onSubmit={VerificarSenha}>
                            <div className="section_cadastro">
                                <label htmlFor="Chapa">Chapa</label>
                                <div className="input_icons">
                                    <Icon className="icon" icon="ic:outline-badge" />
                                    <input 
                                    name="Chapa" 
                                    className="input_field" 
                                    type="text"
                                    placeholder="Digite sua chapa"
                                    onChange={(e) => setChapa(e.target.value)}
                                    required
                                     />
                                    
                                </div>
                            </div>                <div className="section_cadastro">
                                <label htmlFor="Nome">Nome</label>
                                <div className="input_icons">
                                    <Icon className="icon" icon="mingcute:user-4-fill" />
                                    <input 
                                    name="Nome" 
                                    className="input_field" 
                                    type="name"
                                    placeholder="Digite seu nome"
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                     />
                                </div>
                            </div>
                            <div className="section_cadastro">
                                <label htmlFor="Email">E-mail</label>
                                <div className="input_icons">
                                    <Icon className="icon" icon="ic:round-email" />
                                    <input 
                                    name="Email" 
                                    className="input_field" 
                                    type="email" 
                                    placeholder="Digite seu e-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    />
                                </div>
                            </div>
                            <div className="section_input_senha">
                                <div>
                                    <label htmlFor="Senha">Senha</label>
                                    <div className="input_icons">
                                        <Icon className="icon" icon="mdi:password" />
                                        <input 
                                        name="Senha" 
                                        className="input_field_senha" 
                                        type="password" 
                                        placeholder="Digite sua senha"
                                        onChange={(e) => setSenha(e.target.value)}
                                        required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="ConfirmarSenha">Confirmar Senha</label>
                                    <div className="input_icons">
                                        <Icon className="icon" icon="mdi:password" />
                                        <input 
                                        name="ConfirmarSenha" 
                                        className="input_field_senha" 
                                        type="password" 
                                        placeholder="Confirme sua senha"
                                        onChange={(e) => setConfirmarSenha(e.target.value)}
                                        required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="section_btn_confirmar">
                                <button type="submit">Confirmar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            </div>
        </div>
    )
}

export default Cadastro;
