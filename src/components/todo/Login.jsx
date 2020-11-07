import React, { useState } from "react";
import {
  registerSuccessfulLoginForJwt,
  executeJwtAuthenticationService,
} from "./authenticationService";

function Login(props) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [slogged] = useState(false);
  const [flogged, setLoggedFailed] = useState(false);

  function loginClicked() {
    executeJwtAuthenticationService(username, password)
      .then((response) => {
        registerSuccessfulLoginForJwt(username, response.data.token);

        props.history.push(`/welcome/${username}`);
      })
      .catch((error) => {
        let errorMessages = "";
        if (error.message) errorMessages += error.message;
        if (error.response && error.response.data)
          errorMessages += error.response.data.message;
        setLoggedFailed(errorMessages);
      });
  }

  return (
    <form className="container">
      <div className="form-group mt-3">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
      </div>
      <button
        type="button"
        onClick={loginClicked}
        className="btn btn-primary mb-3"
      >
        Login
      </button>
      {slogged && <div>success</div>}

      {flogged && <div className="alert alert-warning">login failed</div>}
    </form>
  );
}

export default Login;
