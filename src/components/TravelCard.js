import React from 'react';
import '../styles/styles.css'
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TravelCard() {
  return (
   <CardGroup> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/96/139" style={{height: '250px', width: '285px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </CardGroup>  
  );
}

export default TravelCard;