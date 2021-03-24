import React from "react";


import ResultsContainer from "../../ResultsContainer";

const Search = (props) => {
  return (
    <div className="container-fluid">
  <nav className="navbar navbar-light bg-light">
        <ResultsContainer />
      </nav>
     

      <img src="./images/book.jpg" className="book" alt="logo" />
    </div>
  );
};

export default Search;
