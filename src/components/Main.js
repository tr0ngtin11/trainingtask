import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "reactstrap";
import Banner from "./Banner";
import ListFeatures from "./ListFeatures";
import Introduction from "./Introduction";
import Contents from "./Contents";
import ListMembers from "./ListMembers";
import Payment from "./Payment";
import Contact from "./Contact";
import Footer from "./Footer";
Main.propTypes = {};

function Main(props) {
  return (
    <>
      <Header />
      <Banner />
      <ListFeatures />
      <Introduction />
      <Contents />
      <ListMembers />
      <Payment />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
