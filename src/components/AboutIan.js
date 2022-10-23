import React from "react";
import "../styles/styles.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutIan() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="CT">
          <Card.Title>Ian Aberbach</Card.Title>
        </div>
        <Card.Text>
          <div className="GH">
            <a href="https://github.com/ianaberbach">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
          <div className="LI">
            <a href="https://www.linkedin.com/in/ian-aberbach-03361a152/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutIan;
