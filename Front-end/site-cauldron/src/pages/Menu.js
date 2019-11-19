import React, {} from 'react';
import Logo from '../images/Logo.png';
import AgregarUsuario from '../images/nuevo-usuario.png';
import IniciarSesion from '../images/iniciar-sesion.png';
import AgregarProyecto from '../images/nuevo-documento.png';
import VerHistorial from '../images/lista.png';
import VerDocumentacion from '../images/documento.png';
import InfoUsuario from '../images/usuario.png';
import Info from '../images/info.png';
import CerrarSesion from '../images/cerrar-sesion.png';

import './Menu.css';

function Menu() {
    return(
    <nav class="container-fluid navbar navbar-expand-lg navbar-expand-sm Menu-Back">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <a href="#" class="navbar-brand">
                <h2 class="Menu-Titulo">
                <img src={Logo} width="30" height="30"class="rounded float-left" alt=""/>
                &emsp;Site Cauldron
                </h2>
            </a>
        </div>
        <div class="mx-auto order-0">
            
        </div>
        <div class="navbar-collapse collapse w-100 order-3 ">
            <ul class="navbar-nav ml-auto navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={AgregarUsuario} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={IniciarSesion} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={AgregarProyecto} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={VerHistorial} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={VerDocumentacion} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={InfoUsuario} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={Info} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <img src={CerrarSesion} class="Menu-Boton "  alt=""></img>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Menu