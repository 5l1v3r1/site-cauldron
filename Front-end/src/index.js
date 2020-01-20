import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

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
