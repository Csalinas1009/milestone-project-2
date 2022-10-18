import React from 'react';
import '../styles/styles.css'
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TravelCard(props) {

  return (
    <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} style={{ height: '250px', width: '285px' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">Do something</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default TravelCard;