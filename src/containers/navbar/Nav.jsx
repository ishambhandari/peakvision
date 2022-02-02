import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import "./nav.css";

const Nav = () => {
  return (
    <div className="container-class">
      <Row>
        <Col sm={2} lg={2}>
          Peak Vision
        </Col>
        <Col sm={5} lg={7}>
          <div className="nav-div">
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Works</li>
              <li>Contacts</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="icons">
            <img src={instagram} alt="instagram-logo" />
            <img src={facebook} alt="facebook-logo" />
            <img src={youtube} alt="youtube-logo" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Nav;
