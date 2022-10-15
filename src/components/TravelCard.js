import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function TravelCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/96/140" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Placeholder 1</ListGroup.Item>
        <ListGroup.Item>Placeholder 2</ListGroup.Item>
        <ListGroup.Item>Placeholder 3</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button href='./edit' type='button' value='input' size='sm'>Edit Post</Button>
        <Button href='/id/delete' type='button' value='input' size='sm'>Delete Post</Button>
      </Card.Body>
    </Card>
  );
}

export default TravelCard;