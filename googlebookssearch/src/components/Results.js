import React from "react";
import Search from "../components/pages/Search";
import API from "../utils/API";

class Results extends React.Component {
  state = {
    books: [],
    search: "",
  };

  //Search books by API
  searchBooks = () => {
    API.googleBooks(this.state.search)
      .then((res) => {
        console.log("This is res.data", res.data.items);
        this.setState({
          books: res.data.items,
          search: "",
        });
      })
      .catch((err) => console.log(err));
  };

  // Handle input
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <Search />
          <h5>Search for books</h5>
          value={this.state.search}
          onChange={this.handleInputChange}
          name="search" placeholder="e.g. Harry Potter"
        </form>
      </div>
    );
  }
}

export default Results;
