import React from "react";
import PropTypes from "prop-types";
import "./css/Payment.css";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { FaCheckCircle, FaLock } from "react-icons/fa";
Payment.propTypes = {};

function Payment(props) {
  return (
    <Row className="payment">
      <Col className=" center " md={3}>
        <Card className="payment-card-1">
          <CardTitle className="payment-card-title">
            Start saving time with Module
          </CardTitle>
          <CardBody className="payment-card-body">
            <span className="payment-icon-bg">
              <FaLock className="payment-icon" />
            </span>
            <CardText className="payment-card-text">
              Safety payments provided by Paddle. The standard VAT rate may be
              charged, following the law of your country.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="center" md={3}>
        <Card className="payment-card-2">
          <CardTitle className="payment-card-2-title">
            <p>Solo</p>
            <p>74$</p>
          </CardTitle>
          <CardSubtitle className="payment-card-2-subtitle">
            Best choice for a team of any size
          </CardSubtitle>
          <CardBody>
            <CardSubtitle className="payment-card-2-subtitle-2">
              Includes:
            </CardSubtitle>
            <ul className="payment-card-2-listcontent">
              <li className="payment-card-2-item">
                <FaCheckCircle className="payment-card-2-item-icon" />
                <p className="payment-card-2-item-text">
                  Unlimited number of editors
                </p>
              </li>
              <li className="payment-card-2-item">
                <FaCheckCircle className="payment-card-2-item-icon" />
                <p className="payment-card-2-item-text">Figma design system</p>
              </li>
              <li className="payment-card-2-item">
                <FaCheckCircle className="payment-card-2-item-icon" />
                <p className="payment-card-2-item-text">
                  Lifetime access to future
                </p>
              </li>
            </ul>

            <button className="payment-card-button">PurChase Module</button>
          </CardBody>
        </Card>
      </Col>
      <Col className="center" md={3}>
        <Card className="payment-card-3">
          <CardTitle className="payment-card-3-title">
            <p>Team</p>
            <p>199$</p>
          </CardTitle>
          <CardSubtitle className="payment-card-2-subtitle">
            For freelancers and solo designers
          </CardSubtitle>
          <CardBody>
            <CardSubtitle className="payment-card-2-subtitle-2">
              Includes:
            </CardSubtitle>
            <ul className="payment-card-2-listcontent">
              <li className="payment-card-2-item">
                <FaCheckCircle className="payment-card-2-item-icon" />
                <p className="payment-card-2-item-text">
                  {" "}
                  Unlimited number of editors
                </p>
              </li>
              <li className="payment-card-2-item">
                <FaCheckCircle className="payment-card-2-item-icon" />
                <p className="payment-card-2-item-text">
                  Figma design ​​system
                </p>
              </li>
              <li className="payment-card-2-item">
                <FaCheckCircle className="payment-card-2-item-icon" />
                <p className="payment-card-2-item-text">
                  Lifetime access to future
                </p>
              </li>
            </ul>

            <button className="payment-card-button">PurChase Module</button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Payment;
