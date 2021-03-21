import React from "react";

function Results(props) {
  return props.books.length === 0 ? (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h3>Search Results</h3>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="container-fluid">
        <div className="row">
          <table className="bookResults">
            <thead />
            <tr />
            <tbody className="id" />

            {props.books &&
              props.books.map((book) => (
                <tr className="results" key={book._id}>
                  <td>
                    <img className="image" src={book.image} alt={book.title} />
                  </td>

                  <td className="title">{book.title}</td>

                  <td className="description">{book.description}</td>

                  <td className="authors">{book.authors}</td>

                  <td className="listPrice">{book.listPrice}</td>

                  <td className="retailPrice">{book.retailPrice}</td>

                  <td className="publisher">{book.publisher}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
