import React from "react";

function Book(props, { children }) {
  return (
    <div>
      <h5>{props.book.title}</h5>
      {children}
    </div>
  );
}

export default Book;
