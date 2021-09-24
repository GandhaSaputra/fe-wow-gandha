import React from 'react';

import { Container, Row, Col,} from 'react-bootstrap';

import bookData from '../../data/dataBookHome';

import BookList from '../book-list/BookList';

export default function List() {
  return (
    <Container className="my-5">
      <Row>
        {bookData.map((data, index) => (
          <Col md={3} key={index}>
            <BookList data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}