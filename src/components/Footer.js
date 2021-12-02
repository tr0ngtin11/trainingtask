import React from "react";
import PropTypes from "prop-types";
import "./css/Footer.css";
import { Card, Col } from "reactstrap";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Col className="footer">
      <Card className="footer-card">
        <p>Sample text. Click to select the text box. Click again or double</p>
        <p>click to start editing the text.</p>
        <p>
          <a href="#">Website Templates </a> created with
          <a href="#"> Website Builder Software.</a>
        </p>
      </Card>
    </Col>
  );
}

export default Footer;
