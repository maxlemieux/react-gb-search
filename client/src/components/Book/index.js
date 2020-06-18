import React from "react";

function Book(props, { children }) {
  const { authors, imageLinks, publisher, publishedDate, title } = props.book;
  const imageStyle = {
    width: '128px',
  }
  return (
    <li className="list-group-item">
      <div className="float-left" style={imageStyle}>
        <img src={imageLinks && imageLinks.thumbnail} />
      </div>
      <h5>{title}</h5>
      <p>{authors && authors.length > 1 ? 'Authors' : 'Author'}: {authors||'n/a'}</p>
      <p>Publisher: {publisher||'n/a'}</p>
      <p>Published Date: {publishedDate||'n/a'}</p>
      {children}
    </li>
  );
}

export default Book;
