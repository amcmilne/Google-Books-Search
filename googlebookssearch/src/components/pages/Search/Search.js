import React from "react";
import BookSearch from "../../BookSearch";
import Results from "../../Results";

const Search = props => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <h4>Find your next great read!</h4>
        <div className="row">
          <form className="form-inline" />
          <BookSearch handleInputChange={props.handleInputChange} />
        </div>
      </nav>
      <Results />

      <img src="./images/book.jpg" className="App-logo" alt="logo" />
    </div>
  );
}

export default Search;
