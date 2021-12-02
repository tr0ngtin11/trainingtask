import React from "react";
import PropTypes from "prop-types";
import "./css/Contents.css";
import { Button, Card, CardText, CardTitle, Row } from "reactstrap";
import { FaAndroid, FaApple, FaAppStore, FaGooglePlay } from "react-icons/fa";
ListMembers.propTypes = {};

function ListMembers(props) {
  return (
    <Row className="content">
      <Card className="content-card">
        <CardTitle className="content-title">
          Powerful way to enjoy your life
        </CardTitle>
        <CardText className="content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
          lacusat augue aliquet posuere. Aliquam fringilla elementum varius.
          Nunclobortis nisl in nibh commodo, quis placerat nisi feugiat.
        </CardText>

        <div className="btn-application">
          <Button className="btn-app appstore">
            <FaApple /> App Store
          </Button>
          <Button className="btn-app ggplay">
            <FaAndroid /> Google Play{" "}
          </Button>
        </div>
      </Card>
    </Row>
  );
}
export default ListMembers;
