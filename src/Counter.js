import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {counter:0, name: 'Hello'};
    }

    click = (e) =>{
        let counter = this.state.counter + 1
        this.setState({counter});
    }

    change = (e) =>{
        let name = e.target.value;
        this.setState({name});
    }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.click}>Click</button>
                <p>{this.state.name}</p>
                <input type='text' value={this.state.name} onChange={this.change} />
                <hr/>  
            </div>
        )
    }
}
export default Counter;