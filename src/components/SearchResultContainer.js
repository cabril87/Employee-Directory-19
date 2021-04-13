import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import NavBar from "./NavBar"
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    sort: "",
    employees: []
  };

  

  componentDidMount() {
    API.search()
    
      .then(res => this.setState({ 
        employees: res.data.results,
        sort:res.data.results
       }))
      .catch(err => console.log(err));
  }

  
  
  filterEmployee = (e) => {
    console.log(this.filterEmployee)

    const list = this.state.employees.filter((employee) => {
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(e.toLowerCase()) !== -1;
    });
    this.setState({
      employees:list
    })
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value
    });
    
  };

  


  handleFormSubmit = event => {
    event.preventDefault();
   this.filterEmployee(this.state.search)
  };

  render() {
    return (
      <div>
       <NavBar />
        
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.employees} />
      </div>
    );
  }
}

export default SearchResultContainer;
