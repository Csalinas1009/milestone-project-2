import React from "react";
import { useState } from "react";
import EditForm from './EditForm';
import "../styles/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";


function TravelCard({pin, deletePin}) {
  
  const [showForm, setShowForm] = useState(false);


  return ( 
    <Row xs='auto' className="g-5">
      {Array.from({ length: 1 }).map((_, idx) => (
        <><Col>
          <Card>
            <Card.Img variant="top" src={pin.imgURL} style={{height: '450px%', width: '450px'}} />
            <Card.Body>
              <Card.Title>{pin.title}</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                {pin.description}
              </Card.Text>
            </Card.Body>
            <div className="btns">
              <div className="editBtn">
                <Button variant="primary" onClick={() => setShowForm(true)} style={{position: 'relative', bottom: '320px', right: '53px'}}>
                  <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
                </Button>
              </div>
              <div className="delBtn">
                <Button variant='primary' onClick={() => deletePin(pin._id)} style={{position: 'relative', bottom: '365px', right: '100px'}}>
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </Card>
        </Col><div className="edit-form">
            {showForm && <EditForm pin={pin} setShowForm={setShowForm} />}
            {showForm && <Button style={{position: 'relative', left: '140px', bottom: '35px'}} type="button" class='btn-close' aria-label="Close" onClick={() => setShowForm(false)}>X</Button>}
          </div></>
      ))}
    </Row>  
  );
}


export default TravelCard;