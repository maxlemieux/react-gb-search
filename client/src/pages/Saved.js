import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { 
  Container 
} from "../components/Grid";
import { List } from "../components/List";

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
      <Container fluid>
        <Jumbotron>
          <h1>react-gb-search</h1>
          <h4>Search for and Save Books of Interest</h4>
        </Jumbotron>
        {books.length ? (
          <List>
            {books.map(book => (
              <Book book={book} deleteBook={deleteBook} key={book._id} saved={true} />
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Container>
    );
  }


export default Saved;
