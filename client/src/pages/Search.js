import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

function Search() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadBooks()
  });

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function showResults() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
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
      // .then(res => showResults())
        .then(res => console.log(res))
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
    </>
  );
}

export default Search;
