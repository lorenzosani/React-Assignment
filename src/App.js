import React, { Component } from 'react';
import { request } from 'graphql-request';
import './App.css';

class App extends Component {

  state = {
    posts: {}
  }

  componentDidMount() {
    const query = `{
      allPosts(count: 1000) {
        createdAt
      }
    }`;
    request('https://fakerql.nplan.io/graphql', query)
    .then((data) => {
      this.setState({ posts: data })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>nPlan App</p>
        </header>
      </div>
    );
  }
}

export default App;
