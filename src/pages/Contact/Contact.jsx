import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
    return (
        <div style={{ backgroundColor: "#000000" }}>
            <Container>
                <Row>
                    <p
                        style={{
                            marginTop: "2rem",
                            color: "#fff",
                            fontSize: "4rem",
                            textAlign: "center",
                            fontWeight: "600",
                            marginBottom: "0",
                        }}
                    >
                        Contact Us
                    </p>
                    <p
                        style={{
                            color: "purple",
                            textAlign: "center",
                            marginTop: "0",
                        }}
                    >
                        +977-9886069449, peakvision.np@gmail.com
                    </p>
                </Row>

                <Row
                    style={{
                        marginLeft: "20%",
                        marginRight: "20%",
                        marginBottom: "2rem",
                    }}
                >
                    <input
                        style={{
                            backgroundColor: "#000",
                            borderWidth: "0 0 2px",
                            fontSize: "2rem",
                            color: "#fff",
                        }}
                        placeholder="Name"
                    />
                </Row>

                <Row
                    style={{
                        marginLeft: "20%",
                        marginRight: "20%",
                        marginBottom: "2rem",
                    }}
                >
                    <input
                        style={{
                            backgroundColor: "#000",
                            borderWidth: "0 0 2px",
                            fontSize: "2rem",
                            color: "#fff",
                        }}
                        placeholder="E-Mail"
                    />
                </Row>
                <Row
                    style={{
                        marginLeft: "20%",
                        marginRight: "20%",
                        marginBottom: "2.5rem",
                    }}
                >
                    <input
                        style={{
                            backgroundColor: "#000",
                            borderWidth: "0 0 2px",
                            color: "#fff",
                            fontSize: "2rem",
                        }}
                        placeholder="Phone Number"
                    />
                </Row>

                <Row
                    style={{
                        marginLeft: "20%",
                        marginRight: "20%",
                        marginBottom: "2rem",
                    }}
                >
                    <textarea
                        style={{
                            backgroundColor: "#000",
                            borderWidth: "2 px 2px 2px",
                            color: "#fff",
                            fontSize: "2rem",
                        }}
                        placeholder="Message"
                    />
                </Row>

                <button
                    className="button-send"
                    style={{
                        color: "#fff",
                        fontSize: "1.3rem",
                        marginBottom: "2rem",
                        borderRadius: "10px",
                    }}
                >
                    SEND
                </button>
            </Container>
        </div>
    );
};

export default Contact;
