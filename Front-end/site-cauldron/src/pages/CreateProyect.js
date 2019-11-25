import React,{component} from 'react';

import '../styles/CreateProyect.css'

function CreateProyect() {
    return(
        <form className="CreateProyect">
            <span> Database Name: 
                <input maxLength="20" size="20" type="text"/>
            </span>
            <br/>
            <span> Description:
                <input maxLength="250" size="40" type="text"/>
            </span>
            
            <p style={{fontStyle:"italic"}}>
                <button className="Discard">Discard</button>    
                Tables
            </p>

            <div className="Tables" >
                <p> Table Name: 
                    <input maxLength="20" size="20" type="text"/>
                </p>

                <p style={{fontStyle:"italic", marginLeft:"10px"}}>
                    Columns
                </p>
                <div className="Columns" >
                    <p> Column Name: 
                        <input maxLength="20" size="20" type="text"/>
                    </p>
                    <div className="ColumnData">
                        <p> Type: 
                            <input maxLength="20" size="20" type="text"/>
                        </p>
                        <p> Column length: 
                            <input maxLength="20" size="20" type="text"/>
                        </p>
                    </div>
                    <p  className="Add" >
                        Add column: 
                        <button >+</button>
                    </p>
                    <p  className="Add">
                        Remove column: 
                        <button >-</button>
                    </p>
                </div>
                <p  className="Add" >
                    Add table: 
                    <button >+</button>
                </p>
                <p  className="Add">
                    Remove table: 
                    <button >-</button>
                </p>
            </div>
            <p>
                <button className="Send">Send</button>
            </p>
        </form>
    );
}

export default CreateProyect