import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import TodoList from './TodoList';
import PostList from './PostList';

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }

// const Welcome = (props)=>(
//   <div>
//     <h1>Hello, {props.name}</h1>
//     {props.count+1}
//   </div>
// );

const NotFound = (props) => (
  <h3>Not Found</h3>
)

class App extends Component {
  // log = (e) => {
  //   console.log();
  // }
    
  render() {
    const message = 'Hello world';

    // fetch('https://jsonplaceholder.typicode.com/posts/')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    return (
      <div className="App">
        <header className="App-header" style={{ background: 'pink' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {message}</h1>

          <div>
            <Link to="/">Home</Link>/
            <Link to="/Counter">Counter</Link>/
            <Link to="/TodoList">Todo List</Link>/
            <Link to="/PostList">Post List</Link>
          </div>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<a href="/Welcome">Welcome</a>
        <form method="GET" action="/posts/">
          <input type="text" name="search" />
          <button type="submit">Search</button>
          <Link to="/posts">Posts</Link>
        </form>*/}

        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route exact path="/Counter" component={Counter} />
          <Route exact path="/Todolist" component={TodoList} />
          <Route exact path="/PostList" component={PostList} />
          <Route component={NotFound} />
        </Switch>

        {/*<Welcome name="Chotika" count={6} />

        <Counter/>
        
        <TodoList/>*/}

      </div>
    );
  }
}

export default App;
