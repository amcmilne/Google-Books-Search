import React from "react";

const styles = {
  image: {
    margin: 20,
  },
};

function ResultsCard(props) {
  return (
    <div className="container" id={props.id} key={props.id}>
      <div className="img-container">
        <div className="card-title">
          <h5>{props.title}</h5>
        </div>
        <div className="card-content">
          <h6>{props.authors}</h6>
          <h6>{props.publisher}</h6>
          <img
            alt={props.title}
            src={props.image}
            style={styles.imageLinks}
            float="left"
            width="160px"
            height="240px"
            object-fit="cover"
          />
          <p>{props.synopsis}</p>
          <button
            type="submit"
            className="submitBtn btn btn-secondary"
            onClick={() =>
              props.handleSavedBtn(props.title, props.authors, props.synopsis, props.publisher)
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsCard;
