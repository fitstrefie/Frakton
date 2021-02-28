import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import girl1 from "../images/girl1.png"
import girl2 from "../images/girl2.png";
import girl3 from "../images/girl3.png";
import girl4 from "../images/girl4.png";
import girl5 from "../images/girl5.png";
import girl6 from "../images/girl6.png";

const Team = () => {
  return (
    <div className="team">
      <h3>Trust us and feel free to try our services</h3>
      <Row>
        <Col className="team_photo1" lg="3" md="3" sm="12">
          <img className="first" src={girl1} alt="" />
          <img className="second" src={girl2} alt="" />
          <img className="third" src={girl3} alt="" />
        </Col>
        <Col
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="content_team"
          lg="6"
          md="6"
          sm="12"
        >
          <h1>100 000</h1>
        </Col>
        <Col className="team_photo2" lg="3" md="3" sm="12">
          <img className="first" src={girl6} alt="" />
          <img className="second" src={girl2} alt="" />
          <img className="third" src={girl3} alt="" />
        </Col>
      </Row>
    </div>
  );
};
export default Team;
