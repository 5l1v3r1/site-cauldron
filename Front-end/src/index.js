import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Message(props){
    if(props.value){
        return <App/>
    }
    return <h2>The secnd</h2>
}

class Btn extends React.Component
{
    constructor(props){
        super(props);
        this.state={value:true}
    }

    handleClick = () =>{
        this.setState({
            value:!this.state.value
        });
    }
    
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Change Component</button>
                <Message value={this.state.value} />
            </div>
            );
    }
}   


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
