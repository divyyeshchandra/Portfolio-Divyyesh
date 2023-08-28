import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an Full Stack Developer with specialized expertise in Web
              development and Blockchain technology. I have a wealth of
              experience working with early-stage startups and contributing to
              open-source projects as a Full Stack Developer, adeptly handling
              all aspects of Frontend, Backend, and Blockchain development. My
              skillset encompasses a diverse range of programming languages,
              frameworks, and cutting-edge technologies. Furthermore, I approach
              problem-solving with a resolute attitude, skillfully overcoming
              challenges encountered at every stage of development. I am
              genuinely enthusiastic about securing a challenging position
              within your esteemed company, as it presents a remarkable
              opportunity to expand my knowledge and further refine my skills as
              a developer.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Development, Blockchain Tech Stack, Python, and
                  React Native.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Web3.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Full Stack Tools</b> and
              <i>
                <b className="purple"> Modern Blockchain Application</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Dapp, Defi and Smart Contract.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/divyyeshchandra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/divyyesh-chandra-9426511a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
