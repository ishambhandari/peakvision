import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Laptop from "../../assets/laptop.png";
import Slider from "react-slick";
import Spinner from "react-bootstrap/Spinner";
import { getData } from "../../apirequest.jsx";
import "./client.css";

const Clients = () => {
    const [data1, setData1] = React.useState(null);
    React.useEffect(() => {
        const res = getData("api/allclients").then((res) => {
            setData1(res.data);
        });
    }, []);
    React.useEffect(() => {}, [data1]);

    const settings = {
        autoplay: true,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
    };

    const test = [
        {
            image_link:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png",
        },
        {
            image_link:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png",
        },
    ];
    return (
        <div>
            {data1 !== null ? (
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
                                fontSize: "3rem",
                                fontWeight: "500",
                                marginBottom: "2rjm",
                            }}
                        >
                            OU
                            <span
                                style={{
                                    textDecoration: "underline",
                                    color: "#fff",
                                }}
                            >
                                R CLIEN
                            </span>
                            TS
                        </p>

                        <Slider {...settings} style={{ padding: "1rem" }}>
                            {data1.map((res) => {
                                return (
                                    <div style={{ color: "#fff" }}>
                                        <img
                                            src={res.image_link}
                                            alt="clientlogo"
                                            height={100}
                                        />
                                    </div>
                                );
                            })}
                        </Slider>
                    </Container>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Spinner
                        animation="border"
                        variant="danger"
                        style={{ alignItems: "center" }}
                    />
                </div>
            )}
        </div>
    );
};

export default Clients;
