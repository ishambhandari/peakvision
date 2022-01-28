import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Card_About from "../../containers/card/Card_About";
import Camera from "../../assets/camera.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-text">
      <div className="home">
        <div className="main-container">
          <Row style={{ height: "50%" }}>
            <Col sm={3} lg={3}>
              <h1 className="h1-first">In It</h1>
              <h1 style={{ fontSize: "4rem" }}>
                <b>To Nail It </b>
              </h1>
            </Col>

            <Col sm={9}>
              {/* <img */}
              {/*   src={Camera} */}
              {/*   alt="Camera" */}
              {/*   style={{ height: "50%", width: "70%" }} */}
              {/* /> */}
            </Col>
          </Row>
          <button className="portfolio-button border-gradient border-gradient-purple">
            Our Portfolio
          </button>
        </div>
      </div>
      <Card_About></Card_About>
    </div>
  );
};
export default Home;
