import React from "react";
import Results from "../components/Results";
import API from "../utils/API";

class ResultsContainer extends React.Component {

  state = {
    search: "",
    book: [],
  };
  
  componentDidMount() {
    API.googleBooks(this.state.search)
        .then(res => {
            this.setState({
            books: res.data.items,
            search: ""
        })})
        .catch(err => console.log(err));
    }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks();
  };


saveGoogleBook = bookChoice => {
    console.log("This is the current book", bookChoice);
    API.saveBook({
        id: bookChoice.id,
        title: bookChoice.title,
        authors: bookChoice.authors,
        listPrice: bookChoice.listPrice,
        retailPrice: bookChoice.retailPrice,
        publisher: bookChoice.publisher,
        image: bookChoice.image,
        
    })
    .then(res => console.log("Success", res))
    .catch(err => console.log("Error", err));
}

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body">
            <img
              src={this.props.imageLinks}
              style={{ maxWidth: "100px" }}
              alt="book"
            />
            <Results
              handleInpputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              book={this.state.book}
              results={this.state.bookArray}
            />
            {/* <button onClick={this.onClickFunc} className="btn">
              {this.state.text}
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsContainer;
