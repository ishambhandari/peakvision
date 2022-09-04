import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Card_About from "../../containers/card/Card_About";
import Camera from "../../assets/c.svg";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-text">
            <div className="home">
                <div className="main-container">
                    <Row>
                        <div
                            style={{
                                backgroundImage: `url(${Camera})`,
                            }}
                            className="camera-background"
                        >
                            <h1 className="h1-first">In It</h1>
                            <h1 style={{ fontSize: "4rem" }}>
                                <b>To Nail It </b>
                            </h1>
                        </div>
                    </Row>
                    <button className="portfolio-button border-gradient border-gradient-purple">
                        Our Portfolio
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Home;
