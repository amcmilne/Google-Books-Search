import React from "react";

function BookSearch(props) {
  return (
    <div className="container-fluid">
      <form className="form-inline">
        <input
          onChange={props.handleInputChange}
          className="form-control"
          name="search"
          type="text"
          placeholder="Search by Name"
        />
        <button
          type="submit"
          className="submitBtn btn btn-secondary"
          onClick={props.handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default BookSearch;
