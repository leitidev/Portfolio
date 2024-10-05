import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
            I'm a dedicated Full Stack Developer with a strong specialization in 
            <i>
                <b className="purple"> Database Management, Machine Learning and Data Analysis . </b>
              </i>
              <br />
              <br />For Database, besides modelling, my knowledge goes for
              <i>
                <b className="purple"> MySQL, Oracle, SQL Server, PostgreSQL, and NoSQL using MongoDb. </b>
              </i>
              <br />
              <br />
              In the field of Data Analysis and Machine Learning, I work extensively with 
              <i>
                <b className="purple"> Pandas, Scikit-Learn, Keras and Pytorch. </b>
              </i>
              <br />
              <br />
              Apart from databases, I’m proficient in Full Stack Development, utilizing backend frameworks such
              as <b className="purple">Flask, Spring Boot, MVC.NET</b> and frontend technologies like
              <i>
                <b className="purple">
                  {" "}
                  Next.js, Vite and ASP.NET
                </b>
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
                  href="https://github.com/leitidev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/leonardo-bruno-26876a268/"
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
