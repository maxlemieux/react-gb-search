import React from "react";
import DeleteBtn from "../DeleteBtn";
import { FormBtn } from "../Form";
import { ListItem } from "../List";
import API from "../../utils/API";

function Book(props, { children }) {
  const { authors, canonicalVolumeLink, description, imageLinks, publisher, publishedDate, title } = props.book;

  const saveFavorite = () => {
    API.saveBook({
      author: authors,
      canonicalVolumeLink,
      description,
      imageLinks,
      publisher,
      publishedDate,
      title
    })
      .then(console.log('saved a favorite'))
      .catch(err => console.log(err));
  }

  return (
    <ListItem>
      <img alt="book cover" className="float-left" src={(imageLinks && imageLinks.thumbnail)||'http://via.placeholder.com/128/FFFFFF?text=No%20image'} />
      <h5><a href={canonicalVolumeLink}>{title}</a></h5>
      <p>{(authors && authors.length > 1) ? 'Authors' : 'Author'} {(authors && authors.map(author => {
        return (
          author
        )
      }))||'n/a'}</p>
      <p>Publisher: {publisher||'n/a'}</p>
      <p>Published Date: {publishedDate||'n/a'}</p>
      {props.saved||<p><FormBtn onClick={saveFavorite}>Save</FormBtn></p>}
      {props.saved && <p><DeleteBtn onClick={() => props.deleteBook(props.book._id)} /></p>}
      {children}
    </ListItem>
  );
}

export default Book;
