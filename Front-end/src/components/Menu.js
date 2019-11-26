import React, {} from 'react';
import Logo from '../images/Logo.png';
import AddUser from '../images/nuevo-usuario.png';
import LogIn from '../images/iniciar-sesion.png';
import AddProject from '../images/nuevo-documento.png';
import Projects from '../images/lista.png';
import Documentation from '../images/documento.png';
import UserInfo from '../images/usuario.png';
import Info from '../images/info.png';
import LogOut from '../images/cerrar-sesion.png';

import '../styles/Menu.css';

function Menu() {
    return(
    <nav className="nav">
        <a href="#" className= "logo">
                <img src={Logo} alt="Logo"/>
                    Site Cauldron
        </a>
            <ul>
                <li>
                    <a href="#" >
                        <img src={AddUser}  alt="Add user"></img>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src={LogIn} alt="Log in"></img>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src={AddProject} alt=""></img>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src={Projects} alt=""></img>
                    </a>
                </li>
                <li >
                    <a href="#" >
                        <img src={Documentation} alt=""></img>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <img src={UserInfo} alt=""></img>
                    </a>
                </li>
                <li >
                    <a href="#" >
                        <img src={Info} alt=""></img>
                    </a>
                </li>
                <li >
                    <a href="#" >
                        <img src={LogOut} alt=""></img>
                    </a>
                </li>
            </ul>
    </nav>
    )
}

export default Menu