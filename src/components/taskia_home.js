import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const Home = ({ title, foto1 }) => {
  return (
    <div className="home">
      <Row>
        <Col
          data-aos="fade-up-right"
          data-aos-duration="3000"
          className="home_content"
          lg="6"
          md="6"
          sm="6"
        >
          <h1>{title}</h1>
          <p>
            We believe that designing products and services in close partnership
            with our clients is the only way to have a real impact on their
            business.
          </p>
          <div className="subscribe d-flex">
            <input type="email" placeholder="name@company.com"></input>
            <a href="#">Try it Free</a>
          </div>
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-duration="3000"
          className="home_image"
          lg="6"
          md="6"
          sm="6"
        >
          <img src={foto1} alt="" srcset="" />
        </Col>
      </Row>
    </div>
  );
};
export default Home;
