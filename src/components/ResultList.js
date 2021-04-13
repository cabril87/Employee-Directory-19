import React from "react";
import "../styles/style.css"

function ResultList(props) {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">First Name<span onClick={props.sortName}></span></th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Age</th>
          <th scope="col">Location</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      {props.results.map(result => (
        <tbody >
          <tr>
            <th scope="row" key={result.id}><img alt={result.picture} className="img-fluid" src={result.picture.medium} /></th>

            <td >{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.phone}</td>
            <td>{result.dob.age}</td>
            <td>{result.location.city}</td>
            <td>{result.email}</td>

          </tr>

        </tbody>
      ))}
    </table>
  );
}

export default ResultList;
