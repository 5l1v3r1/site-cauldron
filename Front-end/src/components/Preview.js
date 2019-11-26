import React,{component} from 'react';

import '../styles/Preview.css'

import Cross from '../images/eliminar.png'
import Database from '../images/Database.PNG'

function Preview() {
    return(
    <div class="Preview">
        <h2>Preview</h2>
        <img className="Close" src={Cross} alt="Exit"></img>
        
        <div>
        <img className="ImgDatabase" src={Database} alt="Database example"></img>
        <span>
            Proyect Name:
            <p>Proyect number one</p>
             Status: 
            <p>Ready</p>
        <button style={{backgroundColor:"#9BCE0A"}} >Editing</button>
        <br/>
        <button style={{backgroundColor:"#0ACE59"}}>Download</button>
        </span>
        
        </div>
  </div>
    );
}

export default Preview