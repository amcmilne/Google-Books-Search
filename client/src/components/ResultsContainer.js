import React from "react";
import BookSearch from "./BookSearch";
import API from "../utils/API";
import ResultsCard from "./ResultsCard";

class ResultsContainer extends React.Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    console.log("success");
    this.searchBooks("");
  }
  searchBooks = (search) => {
    API.getBook(search)
      .then((res) => {
        this.setState({
          results: res.data.items,
        });
      })
      .then(console.log(this.state.results))
      .catch((err) => console.log(err));
  };

  // handleBookClick = (event) => {
  //   let bookId = event;
  //   console.log(bookId);
  // };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleSavedBtn = (title, authors, publisher, synopsis) => {
    const bookInfo = {
      title: title,
      author: authors,
      publisher: publisher,
      synopsis: synopsis
    };
    console.log(bookInfo);
    API.saveBook(bookInfo)
      .then((res) => console.log(res))
      //.catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <BookSearch
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div className="container-fluid">
          {this.state.results && this.state.results.map((book, index) => (
            <div key={index}>
              <ResultsCard
                id={book.volumeInfo.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                image={
                  book.volumeInfo &&
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail
                }
                handleSavedBtn={this.handleSavedBtn}
                decription={book.volumeInfo.synopsis}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ResultsContainer;
