import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }


  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.setState({ list: json })
      })
  }


  render() {
    return (
      <div>
        <h2>Posts</h2>
        <form>
          <input/>
          <button>
            Search
          </button>
        </form>
        <ol style={{ 'textAlign': 'left' }}>
          {
            this.state.list.map((data, index) => (
              <li key={index}>
                <b>
                  Title: &emsp;
                </b>{data["title"]}
              </li>
            ))
          }
        </ol>
      </div>

    );
  }
}
export default PostList;