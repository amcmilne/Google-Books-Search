import React from "react";
import { Container, Row, Col } from "./Layout";

const Results = props => {
  return (
    <Container>
      <h3>Search Results</h3>
      {props.books &&
        props.books.map((book) => {
          return (
            <div className="card mb-5">
              <div className="card-body">
                <Row
                  className="SearchResult row"
                  id={book.title + "Card"}
                  key={book._id}
                >
                  <Col size="2">
                    <img
                      alt={props.title}
                      className="img-fluid"
                      src={props.src}
                      style={{ margin: "0 auto" }}
                    />
                  </Col>
                  <Col size="10" className="pl-2">
                    <h3 className="bookTitle">{book.title}</h3>
                    <h4 className="bookAuthor">{book.authors}</h4>
                    <h4 className="listPrice">{book.listPrice}</h4>
                    <h4 className="retailPrice">{book.retailPrice}</h4>
                    <h4 className="publisher">{book.publisher}</h4>
                    <p className="bookDescription pr-3">{book.description}</p>
                  </Col>
                </Row>
                <Row>
                  <button
                    className="save btn mt-4 ml-3 mr-1"
                    id={book.id}
                    onClick={(event) => props.handleSavedBtn(event)}
                  >
                    Save Book
                  </button>
                </Row>
              </div>
            </div>
          );
        })}
    </Container>
  );
};

export default Results;
