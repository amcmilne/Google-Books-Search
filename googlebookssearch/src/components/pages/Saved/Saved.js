import React from "react";
import SavedBooks from "../../SavedBooks";
import "../css/pages.css";

const Saved = props => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <h3>Hurry back, we will wait for you here!</h3>
      </nav>
      <div className="row">
        <form className="form-inline" />
        <SavedBooks />
      </div>
      <img src="./images/book.jpg" className="logo" alt="books" />
    </div>
  );
}

export default Saved;
