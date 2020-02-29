import React, { Component } from "react";
import "./MonthlyPostsHistogram.css";
import VXBars from './VXBars'

export default class MonthlyPostsHistogram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      months: []
    };
  }

  componentDidUpdate(prevProps) {
    let posts = this.props.posts.allPosts;
    let months = [];
    let months_data = this.getMonthlyPosts(posts, 2019);
    let months_labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    for (var i = 0; i < 12; i++) {
      months.push({
        label: months_labels[i],
        value: months_data[i]
      });
    }

    if (this.props.posts !== prevProps.posts) {
      this.setState({
        months: months
      });
    }
  }

  getMonthlyPosts(posts, year) {
    let m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < posts.length; i++) {
      let date = new Date(parseInt(posts[i].createdAt));
      if (date.getFullYear() === year) {
        m[date.getMonth()]++;
      }
    }
    return m;
  }

  render() {
    return (
      <div className="Histogram card p-5 mt-5 border-0 shadow">
        <VXBars data={this.state.months} height={500} width={1000} />
      </div>
    );
  }
}
