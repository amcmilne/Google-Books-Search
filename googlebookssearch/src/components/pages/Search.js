import React from "react";

function Search(props) {
  const { title, authors, listPrice, retailPrice, publisher, image } = props;
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <table className="bookResults">
            <thead />
            <tr />
            <th scopeName="col"></th>
            <th scopeName="col">Title</th>
            <th scopeName="col">Author</th>
            <th scopeName="col">List Price</th>
            <th scopeName="col">Retail Price</th>
            <th scopeName="col">Publisher</th>

            <tbody className="id" />
            {props.results &&
              props.results.map((result) => (
                <tr className="results" key={result.login.id}>
                  <td>
                    <img className="image" src={image} alt="bookimage" />
                  </td>

                  <td className="title">{title}</td>

                  <td className="authors">{authors}</td>

                  <td className="listPrice">{listPrice}</td>

                  <td className="retailPrice">{retailPrice}</td>

                  <td className="email">{publisher}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Search;
