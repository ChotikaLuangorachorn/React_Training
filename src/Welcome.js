import React, { Component } from 'react';
// import Moment from 'moment';
class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {now: new Date()};
    setInterval(this.tick, 1000);
    this.handleClick = this.handleClick.bind(this);
  }

  tick = () => {
    this.setState({
      now: new Date(),
    });
  }

  handleClick = () =>{
      console.log('click');
  }

  render() {
    const {now} = this.state;
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>Now is : {now.toLocaleString()}</p>

        <button href="#" onClick={this.handleClick}>
            Click Me
        </button>
        <hr/>
      </div>
    )
  }
}
export default Welcome;