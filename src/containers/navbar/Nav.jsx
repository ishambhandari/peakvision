import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import logo from "../../assets/logo.png";
import "./nav.css";

const Nav = () => {
    const [screenW, setScreenW] = React.useState(null);
    const [screenH, setScreenH] = React.useState(null);
    React.useEffect(() => {
        setScreenW(window.innerWidth);
        setScreenH(window.innerHeight);
        console.log("refreshing");
    }, []);

    console.log("this is inner width", screenW);
    return (
        <div>
            {screenW > 800 && (
                <>
                    <div className="container-class">
                        <Row>
                            <Col sm={1}>
                                <img src={logo} className="logo-peak" />
                            </Col>
                            <Col sm={1}></Col>
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
                </>
            )}

            {screenW < 800 && (
                <div className="cscs">
                    <input type="checkbox" id="active" />
                    <label for="active" class="menu-btn">
                        <i class="fas fa-bars"></i>
                    </label>
                    <div class="wrapper">
                        <ul>
                            <li style={{ marginBottom: "2rem" }}>
                                <a href="#">Home</a>
                            </li>

                            <li style={{ marginBottom: "2rem" }}>
                                <a href="#">About</a>
                            </li>

                            <li style={{ marginBottom: "2rem" }}>
                                <a href="#">Works</a>
                            </li>

                            <li style={{ marginBottom: "2rem" }}>
                                <a href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Nav;
