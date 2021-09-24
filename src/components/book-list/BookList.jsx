import React from 'react';
import { Card } from 'react-bootstrap';

import {Link} from 'react-router-dom'

export default function BookList({ data }) {
  return (
    <Card className="card-book mb-3">
      <Link to="/detail-book">
        <Card.Img variant="top" src={data.image} />
      </Link>
      <Card.Body>
        <Card.Title className="book-title">{data.name}</Card.Title>
        <Card.Text className="book-penulis">{data.penulis}</Card.Text>
      </Card.Body>
    </Card>
  );
}