import React, { Component } from "react";
import API from "../utils/API";

class SavedBooks extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  handleSavedBtn = (book) => {
    if (this.state.savedBooks.map((book) => book._id).includes(book._id)) {
      API.saveBook(book)
        .then((savedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook]),
          })
        )
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <div>
        {this.props.books && this.props.books.length ? (
          <div>
            {this.props.books &&
              this.props.books.map((result) => (
                <div className="card mb-3" key={result._id}>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        alt={result.title}
                        className="img-fluid"
                        src={result.image}
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">
                          {result.title} by {result.authors}
                        </h5>
                        <p className="card-text">{result.description}</p>
                        <div>
                          <button
                            onClick={() => this.handleSavedBtn(result)}
                            className="btn badge-pill btn-outline-warning mt-3 ml-3"
                          >
                            {this.state.savedBooks
                              .map((book) => book._id)
                              .includes(result._id)
                              ? "Unsave"
                              : "Save"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <h1 className="text-center">No Results to Display</h1>
        )}
      </div>
    );
  }
}

export default SavedBooks;
