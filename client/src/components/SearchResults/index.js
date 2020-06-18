import React from "react";
import Book from "../Book";

function SearchResults(props, { children }) {
  return (
    <div>
      {props.searchResults.map(item => (
            <Book book={item.volumeInfo} />
          )
        )
      }
      {children}
    </div>
  );
}

export default SearchResults;
