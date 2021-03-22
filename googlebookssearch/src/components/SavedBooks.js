import React from "react";
import { Container, Row, Col } from "./Layout";

const Saved = (props) => {
  return (
    <Container>
      <h3>Saved Books</h3>
      {props.savedBooks &&
        props.savedBooks.map((savedbook) => {
          return (
            <div>
              <div className="card mb-2">
                <div className="card-body">
                  <Row id={savedbook.title} key={savedbook._id}>
                    <Col size="2">
                      <img
                        alt={props.title}
                        className="img-fluid"
                        src={props.src}
                        style={{ margin: "0 auto" }}
                      />
                    </Col>
                    <Col size="10" className="pl-2">
                      <h3 className="bookTitle">{savedbook.title}</h3>
                      <h4 className="bookAuthor">{savedbook.authors}</h4>
                      <p className="bookDescription pr-3">
                        {savedbook.description}
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          );
        })}
    </Container>
  );
};

export default Saved;
