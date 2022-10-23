import React from "react";
import "../styles/styles.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutAar() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="CT">
          <Card.Title>Aaron Everette</Card.Title>
        </div>
        <Card.Text>
          <div className="GH">
            <a href="https://github.com/Aeverette0120">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
          <div className="LI">
            <a href="https://www.linkedin.com/in/aaron-everette-b35716254/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutAar;