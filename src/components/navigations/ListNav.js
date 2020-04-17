import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class ListNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tasklist/todo">ADD</Link>
            </li>
            <li>
              <Link to="/tasklist/done">DONE</Link>
            </li>
            <li>
              <Link to="/tasklist/archive">ARCHIVE</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ListNav;
