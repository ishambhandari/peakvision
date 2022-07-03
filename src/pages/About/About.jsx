import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card_About from "../../containers/card/Card_About";
import design from "../../assets/design.png";
import branding from "../../assets/branding.png";
import photo from "../../assets/photo.png";
import "./about.css";

const About = () => {
    const test =
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-lessnormal distribution of letters, as opposed to using 'Contenthere, content here', making it look like readable English.Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for";
    return (
        <div style={{ marginTop: "5rem" }} className="abt">
            <Container fluid>
                <Row>
                    <Col lg={4} sm={12} md={12}>
                        <Card_About>
                            <Container>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <img
                                            src={design}
                                            alt="design"
                                            style={{
                                                height: "4rem",
                                                width: "4.5rem",
                                                margin: "1rem",
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <p style={{ color: "#fff" }}>{test}</p>
                            </Container>
                        </Card_About>
                    </Col>
                    <Col lg={4} sm={12} md={12}>
                        <Card_About>
                            <Container>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <img
                                            src={branding}
                                            alt="branding"
                                            style={{
                                                height: "4rem",
                                                width: "4.5rem",
                                                margin: "1rem",
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <p style={{ color: "#fff" }}>{test}</p>
                            </Container>
                        </Card_About>
                    </Col>

                    <Col>
                        <Card_About>
                            <Container>
                                <Row>
                                    <Col sm={6} lg={6}>
                                        <img
                                            src={photo}
                                            alt="photo"
                                            style={{
                                                height: "4rem",
                                                width: "4.5rem",
                                                margin: "1rem",
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <p style={{ color: "#fff" }}>{test}</p>
                            </Container>
                        </Card_About>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h1 className="about-heading" style={{ marginTop: "5rem" }}>
                        <b>Who We Are</b>
                    </h1>
                    <p style={{ textAlign: "justify", color: "#fff" }}>
                        {test}
                    </p>
                </Row>
            </Container>
        </div>
    );
};

export default About;
