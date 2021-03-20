import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavTabs() {

  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link
          to="/"
          className={
              window.location.pathname === "/" || window.location.pathname === "/Home" ? "nav-link" : "nav-link"}
        >
          Home
        </Link>
      </li> 
      <li className="nav-item">
        <Link
          to="/search"
          className={
            window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/saved"
          className={
            window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;