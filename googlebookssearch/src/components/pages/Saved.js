import React from "react";
import Results from "../Results";
import API from "../../utils/API";

class Saved extends React.Component {
  state = {
    books: [],
    search: "",
  };

  saveGoogleBook = (currentBook) => {
    console.log("This is the current book", currentBook);
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
    })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err));
  };

  render() {
    return (
      <div>
        {this.state.books.length ? (
          <Results
            bookState={this.state.books}
            saveGoogleBook={this.saveGoogleBook}
          ></Results>
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
