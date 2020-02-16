import React,{component} from 'react';

import '../styles/Projects.css'

function Projects() {
    return(
        <div className="Projects">
            <table>
                <tbody>  
                    <tr>
                        <th> Name </th> 
                        <th> Description </th>
                        <th> 5tatus </th>
                        <th> Creation dd/MM/aaaa </th>
                        <th/>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button>Proyect numbrer one</button>
                        </td>
                        <td> This is the description</td>
                        <td> Payed </td>
                        <td> 10/10/2019 </td>
                        <td>
                            <button>See</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>Proyect numbrer one</button>
                        </td>
                        <td> This is the description</td>
                        <td> Payed </td>
                        <td> 10/10/2019 </td>
                        <td>
                            <button>See</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>Proyect numbrer one</button>
                        </td>
                        <td> This is the description</td>
                        <td> Payed </td>
                        <td> 10/10/2019 </td>
                        <td>
                            <button>See</button>
                        </td>
                    </tr>
                </tbody>           
            </table>
            
            <br/>
            <button className="NewProyect">New Proyect</button>
        </div>
    );
}

export default Projects