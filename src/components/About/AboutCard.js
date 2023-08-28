import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Divyyesh Chandra </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am a graduated student who pursued a Bachelor of Technology
            degree in Computer Science Engineering at BVCOE Delhi, India.
            <br />
            Additionally, I am a former employee of D Frame Foundation, where I
            worked for almost 1 year as a Full Stack Web3 Developer. Currently,
            I am seeking roles as a Full Stack Developer, Blockchain Developer,
            or Freelancer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Capturing Photos
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
