import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import appleicon from "../images/apple.png"
import playstoreicon from "../images/playstore.png"
import foto_work from "../images/2.png";

const Work = () => {
  return (
    <div className="work">
      <Row>
        <Col
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="work_content"
          lg="6"
          md="6"
          sm="6"
        >
          <h1>Seamless Team Workflow & Efficient Task Management</h1>
          <p>
            Do you waste time organizing sticky notes, searching your email and
            apps for to-dos, and figuring out what to work on first? Then you
            need one solution to prioritize your tasks, manage your time, and
            meet your deadlines.
          </p>
          <div className="icons">
            <a href="#">
              <img src={appleicon} alt="" srcset="" />
            </a>
            <a className="play" href="#">
              <img src={playstoreicon} alt="" srcset="" />
            </a>
          </div>
        </Col>
        <Col
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="work_image"
          lg="6"
          md="4"
          sm="6"
        >
          <img src={foto_work} alt="" srcset="" />
        </Col>
      </Row>
    </div>
  );
};
export default Work;
