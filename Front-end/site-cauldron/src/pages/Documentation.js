import React,{component} from 'react';

import '../styles/styles.css'
import Cauldron from '../images/Cauldron.jpg'
import GraphQl from '../images/GraphQL_Logo.png'

function Documentation() {
    return(
    <body className="Body">
        jhdsafkjgkjhhds
        <div className="">
            <button className="expandible">Indice</button>
            <div className="oculto" style={{float:"left"}}>
                <p>
                    1.- GraphQL
                </p>
                <p>
                    2.- Esquema BD
                </p>
                <p>
                    3.- ORM Django 
                </p>
            </div>

        </div>
    </body>
    );
}

export default Documentation