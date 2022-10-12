import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card_About from "../../containers/card/Card_About";
import design from "../../assets/design.png";
import branding from "../../assets/branding.png";
import photo from "../../assets/photo.png";
import prayas from "../../assets/prayas.png";
import neon from "../../assets/neon.png";
import dipesh from "../../assets/dipesh.png";
import "./about.css";

const About = () => {
    const test =
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-lessnormal distribution of letters, as opposed to using 'Contenthere, content here', making it look like readable English.Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for";
    const designsText =
        "We help you design visual brand experiencees for your clients. That includes Brand Identity, UI/UX, Packaging, Flayers, Illustration and Art.";
    const brandingText =
        "Your brand is building itself whether you want it or not. Our strategy will help you boost your market presence and help you increase your engagements.";
    const photoText =
        "We understand the importance of choosing a right photo/videographer for your special day. We will help you narrow your choices and find the best photo/videographer in town.";
    return (
        <div
            style={{ marginTop: "5rem", marginBottom: "5rem" }}
            className="abt"
            id="aboutPage"
        >
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
                                                height: "3rem",
                                                width: "3rem",
                                                margin: "1rem",
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <p
                                    style={{
                                        color: "#fff",
                                        fontSize: "2.5rem",
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    <span
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Desi
                                    </span>
                                    gns
                                </p>
                                <p style={{ color: "#fff", height: "7.5rem" }}>
                                    {designsText}
                                </p>
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
                                                height: "3rem",
                                                width: "3rem",
                                                margin: "1rem",
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <p
                                    style={{
                                        color: "#fff",
                                        fontSize: "2.5rem",
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    <span
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Brand
                                    </span>
                                    ings
                                </p>

                                <p style={{ color: "#fff", height: "7.5rem" }}>
                                    {brandingText}
                                </p>
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
                                                height: "2.8rem",
                                                width: "3.3rem",
                                                margin: "1rem",
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <p
                                    style={{
                                        color: "#fff",
                                        fontSize: "2.5rem",
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    <span
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Photo
                                    </span>
                                    /Video
                                </p>

                                <p
                                    style={{
                                        color: "#fff",
                                        height: "7.5rem",
                                    }}
                                >
                                    {photoText}
                                </p>
                            </Container>
                        </Card_About>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={{ marginTop: "5rem" }}>
                    <Col lg={6}>
                        <Row>
                            <Col></Col>
                            <Col>
                                <img
                                    src={prayas}
                                    style={{
                                        height: "10rem",
                                        width: "10rem",
                                        borderRadius: "50%",
                                        border: "5px solid purple",
                                    }}
                                />
                            </Col>

                            <Col></Col>
                        </Row>

                        <Row>
                            <Col>
                                <img
                                    src={dipesh}
                                    style={{
                                        height: "10rem",
                                        width: "10rem",
                                        borderRadius: "50%",
                                        border: "5px solid purple",
                                    }}
                                />
                            </Col>
                            <Col></Col>

                            <Col>
                                <img
                                    src={neon}
                                    style={{
                                        height: "10rem",
                                        width: "10rem",
                                        borderRadius: "50%",
                                        border: "5px solid purple",
                                    }}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h1 className="about-heading" style={{}}>
                            <b>Who We Are</b>
                        </h1>
                        <p style={{ textAlign: "justify", color: "#fff" }}>
                            {test}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
