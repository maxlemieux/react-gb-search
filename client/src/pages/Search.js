import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

function Search() {
  /* books are the saved books favorited in mongo */
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadBooks()
  });

  function loadBooks() {
    console.log('loadBooks was triggered');
    API.getBooks()
      .then(res => 
        setBooks(res.data.items)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search) {
      API.searchBook(formObject.search)
      // .then(res => console.log(res.data.items))
      .then(res => {
        setSearchResults(res.data.items)
        res.data.items.map(item => console.log(item));
      })
      .catch(err => console.log(err));
    }
  };

  function handleFavoriteSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <Jumbotron>
        <h1>react-gb-search</h1>
        <h4>Search for and Save Books of Interest</h4>
      </Jumbotron>
      <form>
        <Input
          onChange={handleInputChange}
          name="search"
          placeholder="Search by title or author"
        />
        <FormBtn
          disabled={!(formObject.search)}
          onClick={handleFormSubmit}
        >
          Search
        </FormBtn>
      </form>
      <div id="content"></div>
      <SearchResults searchResults={searchResults} />
    </>
  );
}

export default Search;
