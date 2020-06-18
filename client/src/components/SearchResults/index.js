import React from "react";
import Book from "../Book";

function SearchResults(props, { children }) {
  return (
    <ul className="list-group">
      {props.searchResults.map((item, iter) => (
            <Book book={item.volumeInfo} key={iter} />
          )
        )
      }
      {children}
    </ul>
  );
}

export default SearchResults;
