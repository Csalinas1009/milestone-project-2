import React from "react";
import "../styles/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TravelCard({pin, deletePin}) {
  return ( 
    <Row xs={12} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pin.imgURL} style={{ height: "275px", width: "325px" }}/>
            <Card.Body>
              <Card.Title>{pin.title}</Card.Title>
              <Card.Text>
                {pin.description}
              </Card.Text>
            </Card.Body>
            <div className="btns">
            <div className="editBtn">
              <Button variant="primary">
                <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
              </Button>
            </div>
            <div className="delBtn">
              <Button variant='primary' onClick={() => deletePin(pin._id)}  >
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
          </Card>
        </Col>
      ))}
    </Row>  
  );
}

export default TravelCard;