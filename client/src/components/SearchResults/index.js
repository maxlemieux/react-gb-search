import React from "react";
import Book from "../Book";

function SearchResults(props, { children }) {
  return (
    <ul className="list-group">
      {props.searchResults.map(item => (
            <Book book={item.volumeInfo} />
          )
        )
      }
      {children}
    </ul>
  );
}

export default SearchResults;
