import React from "react";
import BookSearch from "./BookSearch";
import { Container, Row, Col } from "./Layout";
//import Results from "./Results";
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
    API.googleBooks(search)
      .then((res) => {
        this.setState({
          results: res.data.items,
        });
      })
      .then(console.log(this.state.results))
      .catch((err) => console.log(err));
  };

  handleBookClick = (event) => {
    let bookId = event;
    console.log(bookId);
  };

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

  handleSavedBtn = (title, authors, publisher) => {
    const bookInfo = {
      title: title,
      author: authors,
      publisher: publisher,
    };
    console.log(bookInfo);
    API.saveBook(bookInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col size="12">
              <BookSearch
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <Row>
          {this.state.results.map((book, index) => (
            <div key={index}>
              <ResultsCard
                id={book.volumeInfo.id}
                title={book.volumeInfo.title}
                decription={book.volumeInfo.description}
                authors={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                image={
                  book.volumeInfo &&
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail
                }
                handleSavedBtn={this.handleSavedBtn}
              />
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ResultsContainer;
