import React from "react";
import BookSearch from "../BookSearch";

function Search(props) {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-light bg-light justify-content-between">
        <h3>Find your next great read!</h3>
        <form class="form-inline">
          <BookSearch handleInputChange={props.handleInputChange} />
        </form>
      </nav>

      <img src="./images/book.jpg" className="App-logo" alt="logo" />
    </div>
  );
}

export default Search;
