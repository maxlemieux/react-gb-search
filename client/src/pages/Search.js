import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

function Search() {
  /* books are the saved books favorited in mongo */
  const [formObject, setFormObject] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search) {
      API.searchBook(formObject.search)
      .then(res => {
        setSearchResults(res.data.items)
      })
      .catch(err => console.log(err));
    }
  };
  const resultsStyle = {
    margin: '20px',
  }
  return (
    <>
      <Jumbotron>
        <h1>react-gb-search</h1>
        <h4>Search for and Save Books of Interest</h4>
      </Jumbotron>
      <div className="container">
      <form>
        <Input
          onChange={handleInputChange}
          name="search"
          placeholder="Search by title or author"
        />
        <FormBtn
          disabled={!(formObject.search)}
          onClick={handleFormSubmit}
        >Search
        </FormBtn>
      </form>
      <SearchResults style={resultsStyle} searchResults={searchResults} />
      </div>
    </>
  );
}

export default Search;
