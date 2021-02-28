import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import foto1 from "../images/box1.png"
import foto2 from "../images/box2.png";
import foto3 from "../images/box3.png";
const Boxes = () => {
    const title = "Keep Tasks in one Place";
  return (
    <div className="boxes">
      <h3>Featured Service that we provide</h3>
      <Row>
        <Col lg="4" md="4" sm="6">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="box"
            id="box1"
          >
            <img src={foto1} alt="" srcset="" />
            <h1>{title}</h1>
            <p>
              Save time, avoid losing work and information, delegate, and track
              tasks to stay on schedule
            </p>
          </div>
        </Col>
        <Col lg="4" md="4" sm="6">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="box "
            id="box2"
          >
            <img src={foto2} alt="" srcset="" />
            <h1>{title}</h1>
            <p>
              Save time, avoid losing work and information, delegate, and track
              tasks to stay on schedule
            </p>
          </div>
        </Col>
        <Col lg="4" md="4" sm="6">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" box "
            id="box3"
          >
            <img src={foto3} alt="" srcset="" />
            <h1>{title}</h1>
            <p>
              Save time, avoid losing work and information, delegate, and track
              tasks to stay on schedule
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Boxes;
