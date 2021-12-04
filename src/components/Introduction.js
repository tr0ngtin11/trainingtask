import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import "./css/Introduction.css";
import { FaUser, FaGlobe } from "react-icons/fa";

Introduction.propTypes = {};
function Introduction(props) {
  return (
    <Row className="introduction">
      <Col className="col-md-5 offset-md-2 introduct-col-left">
        <Card className="introduct-card-left">
          <span className="introduct code-icon-bg">
            <FaUser className=" code-icon-shared" />
          </span>
          <CardBody className="introduct-card-body-left">
            <CardTitle className="introduct-card-title-left">
              We help your business to grow
            </CardTitle>
            <CardText className="introduct-card-text-left">
              A full-service digital agency has the staff to implement a
              multi-channel marketing strategy and manage your advertising
              campaigns. They help you reach your target market in multiple
              advertising channels and multiple devices.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="col-md-4">
        <Card className="introduct-col-right">
          <CardText className="introduct-card-text-right">
            Our team comes to your rescue in order to help you cope with this
            state of confusion. It’s a 360° digital marketing agency that takes
            care of everything that you need to build an unshakable and strong
            presence for your brand in this new digital world.
          </CardText>
        </Card>
      </Col>
    </Row>
  );
}

export default Introduction;
