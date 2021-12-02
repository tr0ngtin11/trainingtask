import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
  Navbar,
} from "reactstrap";
import "./css/Banner.css";

Banner.propTypes = {};

function Banner(props) {
  return (
    <>
      <Row>
        <Col className="banner-left" md={5}>
          <img
            className="banner-image-left"
            src="//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/98cac84b90db5c2f9458d943/pexels-photo-733500.png"
            data-image-width="834"
            data-image-height="1080"
          />
        </Col>
        <Col className="banner-right " md={7}>
          <Card className="banner-card-right">
            <CardSubtitle className="banner-subtitle-right">
              Duis aute irure dolor in
              <br /> reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla.
            </CardSubtitle>
            <p className="banner-text-right">
              We help and solve your business problem
            </p>
            <Button className="banner-btn-right">Read More</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Banner;

{
  /* <Col  className=" col-md-6 banner">

        </Col>
        <Col col-md-6></Col> */
}
