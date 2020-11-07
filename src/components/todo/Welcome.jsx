import React from "react";
import { Link } from "react-router-dom";

function Welcome(props) {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <div>
        {" "}
        welcome to todo app {props.match.params.name}{" "}
        <Link to="/todo">click here</Link>
      </div>
    </div>
  );
}

export default Welcome;
