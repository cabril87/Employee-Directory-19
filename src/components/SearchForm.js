import React from "react";

function SearchForm(props) {
  return (

    <div className="container">
      <div className="form-row justify-content-center">
        <div className="form-group justify-content-center text-center">
         
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for an employee"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
        </button>
        </div>
      </div>
    </div>

  );
}

export default SearchForm;
