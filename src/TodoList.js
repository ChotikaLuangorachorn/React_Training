import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { items:[],text:''}; 
    }
    // addList = (e) =>{
    //     // const text = document.getElementById('input').value;
    //     const text = this.state.text;
    //     this.state.items.push(text);
    //     this.setState({items: this.state.items, text:''});
    //     e.preventDefault();

    // }

    change = (e) =>{
        let text = e.target.value;
        this.setState({text});
    }

    submit = (e) =>{
        const text = this.state.text;
        this.state.items.push(text);
        this.setState({items: this.state.items, text:''});
        e.preventDefault();
    }

    render(){
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.submit}>  
                    <input id='input' type='text' value={this.state.text} onChange={this.change}/>
                    <button type="sumbit">Add</button>
                </form>
                <ul>
                    {
                        this.state.items.map((text, index)=>(
                            <li key={index}>{text}</li>
                        ))
                    }
                </ul>
                <hr/>
            </div>
        )
    }
}
export default TodoList;