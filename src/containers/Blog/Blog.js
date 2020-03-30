import React, { Component } from "react";
import Posts from "./Posts/Posts";
import "./Blog.css";
import { Route } from "react-router-dom";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  state = {
    selectedPostId: null,
    error: false
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
