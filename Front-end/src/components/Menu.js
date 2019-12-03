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
import SideDoc from './SideDoc'
import Doc from './Documentation';
import Principal from './Principal';
import CreateProject from './CreateProject'
import PList from './Projects'
import Log from "./LogIn";
import User from "./UserInfo";
import RegisterUser from "./RegisterUser"
import About from "./About";

import '../styles/Menu.css';

var comp=' ';

function Cont(){
    switch(comp)
    {
        case 'principal':
            return <Principal/>
        break;
        case 'doc':
            return <Doc/>
        break;
        case 'create':
            return <CreateProject/>
        break;
        case 'pList':
            return <PList/>
        break;
        case 'log':
            return <Log/>
            break;
        case 'user':
            return <User/>
            break;
        case 'addUser':
            return <RegisterUser/>
            break;
        case 'about':
            return <About/>
            break;
        case 'close':
            alert("Sesion Closed \n See you soon");
            return <Principal/>
            break;
        default :
            return <Principal/>
        break;
    }
}

class Menu extends React.Component{
    
    constructor(props){
        super(props);
        this.state={value:true};
        comp="principal";
    }

    principalClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'principal';
    }

    docClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'doc';
    }

    createClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'create';
    }
    
    projectsClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'pList';
    }

    logInClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'log';
    }

    userInfoClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'user';
    }

    addUserClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'addUser';
    }

    aboutClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'about';
    }

    logOutClick = () =>{
        this.setState({
            value:!this.state.value
        });
        comp = 'close';
    }

    render(){
        return(
            <div>
        <nav className="Menu">
                     <a href="#" className= "logo">
                             <img onClick={this.principalClick}  src={Logo} alt="Logo"/>
                                 Site Cauldron
                     </a>
                         <ul>
                             <li>
                                 <img onClick={this.addUserClick} src={AddUser}  alt="Add user"></img>
                             </li>
                             <li>
                                 <img onClick={this.logInClick} src={LogIn} alt="Log in"></img>
                             </li>
                             <li>
                                     <img onClick={this.createClick} src={AddProject} alt=""></img>
                             </li>
                             <li>
                                     <img onClick={this.projectsClick} src={Projects} alt=""></img>
                             </li>
                             <li >
                                     <img onClick={this.docClick} src={Documentation} alt=""></img>
                             </li>
                             <li >
                                     <img onClick={this.userInfoClick} src={UserInfo} alt=""></img>
                             </li>
                             <li >
                                     <img onClick={this.aboutClick} src={Info} alt=""></img>
                             </li>
                             <li >
                                     <img onClick={this.logOutClick} src={LogOut} alt=""></img>
                             </li>
                         </ul>
                 </nav>
                <Cont />
                </div>
            );
    }

}

// function Menu() {
//     if(false){
//         return(
//         <nav className="Menu">
//             <a href="#" className= "logo">
//                     <img src={Logo} alt="Logo"/>
//                         Site Cauldron
//             </a>
//             <button onClick={this.SideD}>SideDocs</button>
//                 <ul>
//                     <li>
//                         <a href="#" >
//                             <img src={AddUser}  alt="Add user"></img>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" >
//                             <img src={LogIn} alt="Log in"></img>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" >
//                             <img src={AddProject} alt=""></img>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" >
//                             <img src={Projects} alt=""></img>
//                         </a>
//                     </li>
//                     <li >
//                         <a href="#" >
//                             <img src={Documentation} alt=""></img>
//                         </a>
//                     </li>
//                     <li >
//                         <a href="#">
//                             <img src={UserInfo} alt=""></img>
//                         </a>
//                     </li>
//                     <li >
//                         <a href="#" >
//                             <img src={Info} alt=""></img>
//                         </a>
//                     </li>
//                     <li >
//                         <a href="#" >
//                             <img src={LogOut} alt=""></img>
//                         </a>
//                     </li>
//                 </ul>
//         </nav>
//         )
//     }
//     return <SideD/>
// }

export default Menu