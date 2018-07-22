import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = { list: [], title: "" }
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
  handleChange = (e) => {
    this.setState({ title: e.target.value });
    e.preventDefault();
  }

  onSubmitSearch = (e) => {

    const { title } = this.state;

    let url = 'https://jsonplaceholder.typicode.com/posts'
    if (title !== '') {
      url += `?title=${title}`;
    }
    console.log(url)
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.setState({ list: json })
      })
    e.preventDefault();
  }


  render() {
    return (
      <div>
        <h2>Posts</h2>
        <form onSubmit={this.onSubmitSearch}>
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          <button type="submit">
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