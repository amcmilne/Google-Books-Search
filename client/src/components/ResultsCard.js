import React from "react";

const styles = {
  image: {
    margin: 20,
  },
};

function ResultsCard(props) {
  return (
    <div className="col-lg-3" id={props.id} key={props.id}>
      <div className="img-container">
        <h5>{props.title}</h5>
        <h6>{props.authors}</h6>
        <h6>{props.publisher}</h6>
        <img alt={props.title} src={props.image} style={styles.imageLinks} />
        <button
          type="submit"
          className="submitBtn btn btn-secondary"
          onClick={() =>
            props.handleSavedBtn(props.title, props.authors, props.publisher)
          }
        >
          Save
        </button>

        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ResultsCard;
