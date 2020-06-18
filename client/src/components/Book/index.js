import React from "react";

function Book(props, { children }) {
  const { authors, imageLinks, publisher, publishedDate, title } = props.book;
  return (
    <li className="list-group-item">
      <img className="float-left" src={imageLinks && imageLinks.thumbnail||'http://via.placeholder.com/128/FFFFFF?text=No%20image'} />
      <h5>{title}</h5>
      <p>{authors && authors.length > 1 ? 'Authors' : 'Author'} {authors && authors.map((author) => {
        return (
          author
        )
      })||'n/a'}</p>
      <p>Publisher: {publisher||'n/a'}</p>
      <p>Published Date: {publishedDate||'n/a'}</p>
      {children}
    </li>
  );
}

export default Book;
