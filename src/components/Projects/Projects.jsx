import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import BeautyBebo from "../../Assets/Projects/BeautyBebo.png";
import coSchedule from "../../Assets/Projects/coSchedule.jpg";
import OverStock from "../../Assets/Projects/OverStock.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BeautyBebo}
              isBlog={false}
              title="BeautyBebo"
              description="This project is a clone of BeautyBebo,an e-commerce website for purchasing beauty and personal care products.Beauty Bebo is India’s fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products. We at Beauty Bebo are committed to provide genuine products on fair price to our customers. We bring worlds premium brands and products for you on a single platform. "
              link="https://github.com/NikhilMehara/BeautyBebo"
              live="https://gleaming-hotteok-a2ad5e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coSchedule}
              isBlog={false}
              title="CoSchedule"
              description="CoSchedule is a Calendar base organizing Website that lets users to organised there day to day task in one place and many more. It has the ability to combining a simple user experience and interface with enough depth for power users."
              link="https://github.com/NikhilMehara/group-project-masai"
              live="https://bhupesh1114.github.io/group-project-masai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OverStock}
              isBlog={false}
              title="Overstock"
              description="This project is a clone of (Overstock.com) Overstock.com, Inc. is an American internet retailer selling primarily furniture headquartered in Midvale, Utah, near Salt Lake City. Patrick M. Byrne founded Overstock.com in 1999. The company initially sold exclusively surplus and returned merchandise on an online e-commerce marketplace, liquidating the inventories of at least 18 failed dot-com companies at below-wholesale prices. The company continues to sell home decor, furniture, bedding, and many other goods that are closeout merchandise; however, it also sells new merchandise."
              link="https://github.com/NikhilMehara/overstock-clone"
              live="https://overstock-clone-2.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
