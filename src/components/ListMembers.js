import React from "react";
import "./css/ListMembers.css";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
ListMembers.propTypes = {};

function ListMembers(props) {
  return (
    <div className="listmembers ">
      <Row className="listmembers-row1">
        <Col>
          <Card className="listmembers-card">
            <CardImg
              className="listmembers-img"
              src="assets/images/mem1.jpeg"
              alt="member"
            />
            <CardBody>
              <CardTitle className="listmembers-title">Adam Jonson</CardTitle>
              <CardSubtitle className="listmembers-subtitle">
                Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="listmembers-card">
            <CardImg
              className="listmembers-img"
              src="assets/images/mem2.jpg"
              alt="member"
            />
            <CardBody>
              <CardTitle className="listmembers-title">Adam Jonson</CardTitle>
              <CardSubtitle className="listmembers-subtitle">
                Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="listmembers-card">
            <CardImg
              className="listmembers-img"
              src="assets/images/mem3.jpg"
              alt="member"
            />
            <CardBody>
              <CardTitle className="listmembers-title">Adam Jonson</CardTitle>
              <CardSubtitle className="listmembers-subtitle">
                Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="listmembers-card">
            <CardImg
              className="listmembers-img"
              src="assets/images/mem4.jpeg"
              alt="member"
            />
            <CardBody>
              <CardTitle className="listmembers-title">Adam Jonson</CardTitle>
              <CardSubtitle className="listmembers-subtitle">
                Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="listmembers-card">
            <CardImg
              className="listmembers-img"
              src="assets/images/mem5.jpeg"
              alt="member"
            />
            <CardBody>
              <CardTitle className="listmembers-title">Adam Jonson</CardTitle>
              <CardSubtitle className="listmembers-subtitle">
                Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="listmembers-card">
            <CardImg
              className="listmembers-img"
              src="assets/images/mem6.jpeg"
              alt="member"
            />
            <CardBody>
              <CardTitle className="listmembers-title">Adam Jonson</CardTitle>
              <CardSubtitle className="listmembers-subtitle">
                Developer
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ListMembers;
