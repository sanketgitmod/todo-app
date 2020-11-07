import React from "react";
import { Link } from "react-router-dom";
import { logout, isUserLoggedIn } from "./authenticationService";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        mytodo
      </a>
      <ul className="navbar-nav">
        {isUserLoggedIn() && (
          <li className="nav-item">
            <Link to="/welcome/mytodo" className="nav-link">
              Home
            </Link>
          </li>
        )}
        {isUserLoggedIn() && (
          <li className="nav-item">
            <Link to="/todo" className="nav-link">
              Todos
            </Link>
          </li>
        )}
      </ul>
      <ul className="navbar-nav  navbar-collapse justify-content-end">
        {!isUserLoggedIn() && (
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        )}

        {isUserLoggedIn() && (
          <li className="nav-item">
            <Link
              type="submit"
              to="/logout"
              className="nav-link "
              onClick={logout}
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
