import React from "react";
import { FormBtn } from "../Form"
import API from "../../utils/API";

function Book(props, { children }) {
  const { authors, imageLinks, publisher, publishedDate, title } = props.book;

  const saveFavorite = () => {
    API.saveBook({
      author: authors,
      imageLinks,
      publisher,
      publishedDate,
      title
    })
      .then(console.log('saved a favorite'))
      .catch(err => console.log(err));
  }

  return (
    <li className="list-group-item">
      <img alt="book cover" className="float-left" src={(imageLinks && imageLinks.thumbnail)||'http://via.placeholder.com/128/FFFFFF?text=No%20image'} />
      <h5>{title}</h5>
      <p>{(authors && authors.length > 1) ? 'Authors' : 'Author'} {(authors && authors.map(author => {
        return (
          author
        )
      }))||'n/a'}</p>
      <p>Publisher: {publisher||'n/a'}</p>
      <p>Published Date: {publishedDate||'n/a'}</p>
      <p><FormBtn onClick={saveFavorite}>Save</FormBtn></p>
      {children}
    </li>
  );
}

export default Book;
