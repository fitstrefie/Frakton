import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Header = () =>{

    return (
      <div className="header">
        <Row>
          <Col className="header_logo" lg="6" md="6" sm="6" xs="6">
            <h1>Taskia</h1>
          </Col>
          <Col className="header_button" lg="6" md="6" sm="6" xs="6">
            <a href="#">Try Free</a>
          </Col>
        </Row>
      </div>
    );

}
export default Header;