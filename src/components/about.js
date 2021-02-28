import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import foto_about from "../images/3.png";

const About = () => {
  return (
    <div className="about">
      <Row>
        <Col
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="about_image"
          lg="6"
          md="6"
          sm="6"
        >
          <img src={foto_about} alt="" srcset="" />
        </Col>
        <Col
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="about_content"
          lg="6"
          md="6"
          sm="6"
        >
          <h1>Why do you need task management software?</h1>
          <p>
            Do you waste time organizing sticky notes, searching your email and
            apps for to-dos, and figuring out what to work on first? Then you
            need one solution to prioritize your tasks, manage your time, and
            meet your deadlines.
          </p>

          <a href="#">Learn more</a>
        </Col>
      </Row>
    </div>
  );
};
export default About;
