import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <Row color="primary" className="side-bar flex-direction-column">
      <Col>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </Col>
    </Row>
  );
}

export default Sidebar;
