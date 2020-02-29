import React, { Component } from "react";
import { request } from "graphql-request";
import MonthlyPostsHistogram from "./Components/MonthlyPostsHistogram";
import "./App.css";

class App extends Component {
  state = {
    posts: {}
  };

  componentDidMount() {
    const query = `{
      allPosts(count: 5000) {
        createdAt
      }
    }`;
    request("https://fakerql.nplan.io/graphql", query)
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <div class="container text-center p-5">
          <h1 className="App-header text-dark">Number of posts per month</h1>
          <MonthlyPostsHistogram posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
