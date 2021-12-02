import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  NavItem,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Button,
  Row,
  Col,
} from "reactstrap";
import { FaBars, FaTimes } from "react-icons/fa";

function Header(props) {
  const Sidebar = (
    <Col>
      <FaTimes className="posFaTimes" />
      <Row>
        <a>Home</a>
      </Row>
      <Row>
        <a>Home</a>
      </Row>
      <Row>
        <a>Home</a>
      </Row>
    </Col>
  );
  return (
    <div className="btn-header ">
      <Button color="faded">
        <FaBars />
      </Button>
    </div>
    // <Col md={2}>
    //   <FaTimes className="posFaTimes" />
    //   <Row>
    //     <a>Home</a>
    //   </Row>
    //   <Row>
    //     <a>Home</a>
    //   </Row>
    //   <Row>
    //     <a>Home</a>
    //   </Row>
    // </Col>
  );
}

export default Header;
