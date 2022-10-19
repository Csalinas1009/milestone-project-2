import React from "react";
import "../styles/styles.css";
import { CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TravelCard(props) {
  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.image}
          style={{ height: "250px", width: "285px" }}
        />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>{props.Text}</Card.Text>
          <div className="btns">
            <div className="editBtn">
              <Button variant="primary">
                <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
              </Button>
            </div>
            <div className="delBtn">
              <Button variant="primary">
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default TravelCard;
