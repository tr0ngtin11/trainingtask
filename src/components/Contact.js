import React from "react";
import PropTypes from "prop-types";
import "./css/Contact.css";
import {
  Button,
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Input,
  Row,
} from "reactstrap";
import {
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

Contact.propTypes = {};

function Contact(props) {
  return (
    <Row className="contact">
      <Col className="offset-md-0 col-md-2">
        <Card className="contact-card-1">
          <CardTitle className="contact-card-title">Get in touch</CardTitle>
          <CardSubtitle className="contact-card-subtitle">
            We can ensure reliability, low cost fares and most important, with
            safety and comfort in mind.
          </CardSubtitle>
          <CardText className="contact-card-text">
            Etiam sit amet convallis erat – class aptent taciti sociosqu ad
            litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit
            amet convallis erat.
          </CardText>
          <span className="contact-card-list-logo-social">
            <FaFacebookF className="logo-social" />
            <FaTwitter className="logo-social" />
            <FaInstagram className="logo-social" />
            <FaLinkedinIn className="logo-social" />
          </span>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="contact-card-2 offset-md-5">
          <CardTitle className="card-2-title">Сall us</CardTitle>
          <CardText className="card-2-text">
            1 (234) 567-891 <br />1 (234) 987-654
          </CardText>
          <CardTitle className="card-2-title">Location</CardTitle>
          <CardText className="card-2-text">
            121 Rock Sreet, 21 Avenue,
            <br /> New York, NY 92103-9000
          </CardText>
          <CardTitle className="card-2-title mb-3">Top services</CardTitle>

          <ul className="card-2-listcheck">
            <li className="card-2-listcheck-item">
              <FaCheck className="contact-icon" /> <p>Local transfers</p>
            </li>
            <li className="card-2-listcheck-item">
              <FaCheck className="contact-icon" /> <p>Airport Transfers</p>
            </li>
            <li className="card-2-listcheck-item">
              <FaCheck className="contact-icon" /> <p>Excursions and Tours</p>
            </li>
          </ul>
        </Card>
      </Col>
      <Col className="contact-card-3 col-md-3  ">
        <Input
          className="contact-input"
          id="Name"
          name="name"
          placeholder="Enter your name"
          type="name"
        />

        <Input
          required
          className="contact-input"
          id="Email"
          name="email"
          placeholder="Enter a valid email address"
          type="email"
        />

        <Input
          required
          className="contact-input-textexa"
          id="Text"
          name="text"
          type="textarea"
        />
        <Button className="contact-card-3-btn">SUBMIT</Button>
      </Col>
    </Row>
  );
}

export default Contact;
