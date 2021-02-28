import React from "react";
import { Col, Row, Form } from "react-bootstrap";


const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col className="footer_content" lg="6" md="8" sm="8">
          <h1>Get better work done</h1>
          <p>See why millions of people across 195 countries use Dash.</p>
          <div className="subscribe d-flex">
            <input type="email" placeholder="name@company.com"></input>
            <a href="#">Try it Free</a>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
