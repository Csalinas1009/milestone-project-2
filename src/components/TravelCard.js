import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function TravelCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/96/140" />
      <Card.Body>
        <Card.Title>ex: Christian visited Colorado!</Card.Title>
        <Card.Text>
         This is example text for the description of the travel location.
         This will include time of year, weather conditions, and local 
         sightseeing or notable monuments that this person visited!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        <Button href='./edit' type='button' value='input' size='sm'>Edit Post</Button>
        <Button href='/id/delete' type='button' value='input' size='sm'>Delete Post</Button>
      </Card.Body>
    </Card>
  );
}

export default TravelCard;