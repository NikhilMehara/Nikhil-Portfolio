import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCards from "./BlogsCards";
import Particle from "../Particle";
import MasaiSchool from "../../Assets/Projects/MasaiSchool.png"
import coSchedule from "../../Assets/Projects/coSchedule.jpg"
import OverStock from "../../Assets/Projects/OverStock.png"

function Projects() {
  return (
    <Container fluid className="project-section" style={{height:"800px"}}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Blogs Which I've Written recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={MasaiSchool}
              isBlog={true}
              title="Starting of A Life Changing Journey"
              link="https://medium.com/@mehranikhil1999/starting-of-a-life-changing-journey-5383cbc54a45"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={coSchedule}
              isBlog={true}
              title="Cloning of CoSchedule using HTML, CSS & Javascript (My First Project Experience)"
              link="https://medium.com/@mehranikhil1999/cloning-of-coschedule-using-html-css-javascript-my-first-project-experience-478a460f4dd5"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={OverStock}
              isBlog={true}
              title="Cloning An E-Commerce Website(Overstock) Using HTML,CSS & JavaScript"
              link="https://medium.com/@mehranikhil1999/cloning-a-e-commerce-website-overstock-using-html-css-javascript-a8eb267b52c9"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
