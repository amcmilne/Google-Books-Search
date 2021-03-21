import React from "react";
import ResultsContainer from "../components/ResultsContainer";


class Saved extends React.Component {
  state = {
    books: [],
    search: "",
  };
  
  render() {
    return (
      <div>
        {this.state.books.length ? (
          <ResultsContainer
            bookState={this.state.books}
            saveGoogleBook={this.saveGoogleBook}
          ></ResultsContainer>
        ) : (
          <div>
            <hr />
            <p>No results to display</p>
          </div>
        )}
      </div>
    );
  }
}

export default Saved;
