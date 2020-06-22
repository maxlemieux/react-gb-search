import React from "react";
import { Container, Row, Col } from "../Grid";
import RemoveBtn from "../RemoveBtn";
import { FormBtn } from "../Form";
import { ListItem } from "../List";
import API from "../../utils/API";

function Book(props, { children }) {
  const { authors, canonicalVolumeLink, description, imageLinks, publisher, publishedDate, title } = props.book;

  const saveFavorite = (event) => {
    console.log(event.target.firstChild.data)
    event.target.firstChild.data = 'Saved!';
    event.target.disabled = true;
    API.saveBook({
      authors,
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

  console.log(props.book);

  return (
    <ListItem>
      <Container>
        <Row>
          <Col size="md-2">
            <img alt="book cover" className="float-left" src={(imageLinks && imageLinks.thumbnail)||'http://via.placeholder.com/128/FFFFFF?text=No%20image'} />
          </Col>
          <Col size="md-10">
            <h6>Title:</h6>
            <p><a href={canonicalVolumeLink}>{title}</a></p>
            <h6>{(authors && authors.length > 1) ? 'Authors:' : 'Author:'}</h6>
            <p>
              {(authors && authors.map(author => <>{author}<br/></>))||'n/a'}
            </p>
            <h6>Publisher:</h6>
            <p>{publisher||'n/a'}</p>
            <p>Published Date: {new Date(publishedDate).toLocaleDateString()||'n/a'}</p>
            <br/>
            {props.saved||<p><FormBtn onClick={saveFavorite}>Save</FormBtn></p>}
            {/* {props.saved && <p><DeleteBtn onClick={() => props.deleteBook(props.book._id)} /></p>} */}
            {props.saved && <p><RemoveBtn onClick={() => props.deleteBook(props.book._id)}>Remove</RemoveBtn></p>}
          </Col>
        </Row>
      </Container>
      {children}
    </ListItem>
  );
}

export default Book;
