import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Laptop from "../../assets/laptop.png";
import Slider from "react-slick";
import "./client.css";

const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className="client-container">
            <Container
                style={{
                    backgroundImage: `url(${Laptop})`,
                    objectFit: "contain",
                    backgroundPosition: "bottom",
                }}
            >
                <p
                    style={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: "4rem",
                        fontWeight: "600",
                        marginBottom: "2rjm",
                    }}
                >
                    Our Clients
                </p>
                <Slider
                    {...settings}
                    style={{ marginLeft: "2rem", padding: "2rem" }}
                >
                    <div>
                        <img
                            src={Laptop}
                            style={{ height: "100px", width: "100px" }}
                        />
                    </div>

                    <div>
                        <img
                            src={Laptop}
                            style={{ height: "100px", width: "100px" }}
                        />
                    </div>
                    <div>
                        <img
                            src={Laptop}
                            style={{ height: "100px", width: "100px" }}
                        />
                    </div>

                    <div>
                        <img
                            src={Laptop}
                            style={{ height: "100px", width: "100px" }}
                        />
                    </div>

                    <div>
                        <img
                            src={Laptop}
                            style={{ height: "100px", width: "100px" }}
                        />
                    </div>
                </Slider>
            </Container>
        </div>
    );
};

export default Clients;
