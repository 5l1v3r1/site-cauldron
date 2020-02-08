import React, {useState} from 'react';

import Logo from '../images/Logo.png';

import registered, {unRegistered} from '../menuItems'

import MenuButton from './MenuButton'

import '../styles/Menu.css';

function Menu(props) {   

    function option(option){
        props.confCont(option);
    }

    if(props.user)
        return(
            <nav className="Menu">
                    <img src={Logo} alt="Logo"/>
                        Site Cauldron
                <ul>            
                    {registered.map((item) =>{
                        return(
                            <li key={item.key} >
                                <MenuButton onClick={option} button={item.option} name={item.key}/>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    else
        return(
            <nav className="Menu">
                    <img className="Logo" src={Logo} alt="Logo"/>
                        Site Cauldron
                <ul>
                    {unRegistered.map((item) =>{
                        return(
                            <li key={item.key} >
                                <MenuButton onClick={option} button={item.option} name={item.key}/>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
}

export default Menu