import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import lung from "../../Assets/Projects/lung.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Machine Learning Section */}
        <h2 className="category-heading">  <strong className="purple">Machine Learning</strong></h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lung}
              isBlog={false}
              title="Lung cancer prediction model"
              description="A model capable of distinguishing between normal lungs and lungs with cancer, based on patterns identified in training images."
              ghLink="https://github.com/leitidev/InScreening-IA/tree/sprint3"
            /*demoLink="https://plant49-ai.herokuapp.com/"*/
            />
          </Col>


        </Row>

        {/* Database Section */}
        <h2 className="category-heading">  <strong className="purple">Database Projects</strong></h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        </Row>

        {/* Data Analysis Section */}
        <h2 className="category-heading">  <strong className="purple">Data Analysis</strong></h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
