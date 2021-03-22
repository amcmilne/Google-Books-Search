import React from "react";
import BookSearch from "./BookSearch";
import { Container, Row, Col } from "./Layout";
import Results from "./Results";
import API from "../utils/API";


class ResultsContainer extends React.Component {
  state = {
    search: "",
    book: [],
  };

  componentDidMount() {
    API.googleBooks(this.state.search)
      .then((res) => {
        this.setState({
          books: res.data.results,
          search: "",
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then((res) => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          let results = res.data.items;
          results = results.map((bookChoice) => {
            bookChoice = {
              id: bookChoice.id,
              title: bookChoice.title,
              decription: bookChoice.description,
              authors: bookChoice.authors,
              listPrice: bookChoice.listPrice,
              retailPrice: bookChoice.retailPrice,
              publisher: bookChoice.publisher,
              image: bookChoice.image,
            };
            return bookChoice;
          });
          this.setState({ books: results, search: "" });
        }
      })
      .catch((err) => this.setState({ error: err.items }));
  };

  handleSavedBtn = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    API.saveBook(savedBooks)
    .then((res) => console.log("Success", res))
    .catch((err) => console.log("Error", err));
  };

  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col size="12">
            <img
              src={this.props.imageLinks}
              style={{ maxWidth: "100px" }}
              alt="book"
            />
            <BookSearch
              handleInpputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              book={this.state.book}
              results={this.state.bookChoice}
              />
              </Col>
              </Row>
            </Container>
            <Container>
          <Results books={this.state.books} handleSavedButton={this.handleSavedBtn} />
        </Container>
      </Container>
    )
  }
}

export default ResultsContainer;
