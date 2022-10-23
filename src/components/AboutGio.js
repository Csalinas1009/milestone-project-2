import React from "react";
import "../styles/styles.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutGio() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="CT">
          <Card.Title>Giovanni Peres</Card.Title>
        </div>
        <Card.Text>
          <div className="GH">
            <a href="https://github.com/Gioperes">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
          <div className="LI">
            <a href="https://www.linkedin.com/in/giovanni-peres-ab5720179/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutGio;
