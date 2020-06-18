import React from "react";
import Book from "../Book";
import { List } from "../List";

function SearchResults(props, { children }) {
  return (
    <List className="list-group">
      {props.searchResults.map((item, iter) => (
            <Book book={item.volumeInfo} key={iter} />
          )
        )
      }
      {children}
    </List>
  );
}

export default SearchResults;
