import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import "./css/List-Features.css";
import {
  FaCode,
  FaDatabase,
  FaLock,
  FaGlobe,
  FaSort,
  FaUserFriends,
} from "react-icons/fa";
ListFeatures.propTypes = {};

function ListFeatures(props) {
  return (
    <div className="list-features">
      <Row>
        <CardTitle className="list_features-title">
          Hosting solution with benefits
        </CardTitle>
        <CardSubtitle className="list_features-subtitle">
          With a lot of powerful features, we guarantee simplicity and clarity.
        </CardSubtitle>
      </Row>
      <Row>
        <Col className="col-12 col-md-4 offset-md-3 col-left">
          <Card className=" Card-left-r2">
            <span className="code-icon-bg">
              <FaCode className="code-icon" />
            </span>
            <CardBody className="Card-body-left-r2">
              <CardTitle className="card-title">Code Editor</CardTitle>
              <CardText className="card-text">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-12 col-md-4 off-md-7 col-right">
          <Card className=" Card-left-r2">
            <span className="code-icon-bg">
              <FaDatabase className="code-icon-shared" />
            </span>
            <CardBody className="Card-body-left-r2">
              <CardTitle className="card-title">Media Storage</CardTitle>
              <CardText className="card-text">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-4 offset-md-3 col-left">
          <Card className=" Card-left-r2">
            <span className="code-icon-bg">
              <FaLock className="code-icon-shared" />
            </span>
            <CardBody className="Card-body-left-r2">
              <CardTitle className="card-title">SSL Certificate</CardTitle>
              <CardText className="card-text">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-12 col-md-4 off-md-7 col-right">
          <Card className=" Card-left-r2">
            <span className="code-icon-bg">
              <FaGlobe className="code-icon-shared" />
            </span>
            <CardBody className="Card-body-left-r2">
              <CardTitle className="card-title">Personal Domain</CardTitle>
              <CardText className="card-text">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-4 offset-md-3 col-left">
          <Card className=" Card-left-r2">
            <span className="code-icon-bg">
              <FaSort className="code-icon-shared" />
            </span>
            <CardBody className="Card-body-left-r2">
              <CardTitle className="card-title">Domain Transfer</CardTitle>
              <CardText className="card-text">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-12 col-md-4  col-right">
          <Card className=" Card-left-r2">
            <span className="code-icon-bg">
              <FaUserFriends className="code-icon-shared" />
            </span>
            <CardBody className="Card-body-left-r2">
              <CardTitle className="card-title">Developer Friendly</CardTitle>
              <CardText className="card-text">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ListFeatures;
