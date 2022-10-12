import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as Rlink } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import hamburger from "../../assets/hamburger.png";
import logo from "../../assets/logo.png";
import "./nav.css";

const Nav = () => {
    const [screenW, setScreenW] = React.useState(null);
    const [screenH, setScreenH] = React.useState(null);
    const checkboxref = React.createRef();

    React.useEffect(() => {
        setScreenW(window.outerWidth);
        setScreenH(window.innerHeight);
        console.log("window", window.outerWidth);
        console.log("refreshing");
    }, []);
    const handleRef = () => {
        checkboxref.current.id = "inactive";
    };

    console.log("this is inner width", screenW);
    return (
        <div>
            {screenW > 950 && (
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
                                        <Link
                                            className="link"
                                            to="homePage"
                                            smooth={true}
                                            duration={400}
                                        >
                                            <li>Home</li>
                                        </Link>

                                        <Link
                                            className="link"
                                            to="aboutPage"
                                            smooth={true}
                                            duration={400}
                                        >
                                            <li>About</li>
                                        </Link>

                                        <Rlink className="link" to="/works">
                                            <li>Works</li>
                                        </Rlink>
                                        <Link
                                            className="link"
                                            to="contactPage"
                                            smooth={true}
                                            duration={400}
                                        >
                                            <li>Contacts</li>
                                        </Link>
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

            {screenW < 950 && (
                <div className="cscs">
                    <input type="checkbox" id="active" ref={checkboxref} />
                    <label
                        for="active"
                        class="menu-btn"
                        onClick={() => (checkboxref.current.id = "active")}
                    >
                        <img src={hamburger} style={{ height: "50%" }} />
                    </label>
                    <div class="wrapper">
                        <ul>
                            <Link
                                className="link"
                                to="homePage"
                                smooth={true}
                                duration={400}
                                style={{
                                    marginBottom: "3rem",
                                    textDecoration: "none",
                                }}
                                onClick={handleRef}
                            >
                                <li
                                    style={{
                                        fontSize: "3rem",
                                        textDecoration: "none",
                                        textUnderline: "none",
                                    }}
                                >
                                    Home
                                </li>
                            </Link>

                            <Link
                                className="link"
                                to="aboutPage"
                                smooth={true}
                                duration={400}
                                style={{
                                    marginBottom: "3rem",
                                    textDecoration: "none",
                                }}
                                onClick={handleRef}
                            >
                                <li
                                    style={{
                                        fontSize: "3rem",
                                        textDecoration: "none",
                                        textUnderline: "none",
                                    }}
                                >
                                    About
                                </li>
                            </Link>

                            <Rlink
                                className="link"
                                to="/works"
                                style={{
                                    marginBottom: "3rem",
                                    textDecoration: "none",
                                }}
                                onClick={handleRef}
                            >
                                <li
                                    style={{
                                        fontSize: "3rem",
                                        textDecoration: "none",
                                    }}
                                >
                                    Works
                                </li>
                            </Rlink>

                            <Link
                                className="link"
                                to="contactPage"
                                smooth={true}
                                duration={400}
                                style={{
                                    marginBottom: "3rem",
                                    textDecoration: "none",
                                }}
                                onClick={handleRef}
                            >
                                <li
                                    style={{
                                        fontSize: "3rem",
                                        textDecoration: "none",
                                        textUnderline: "none",
                                    }}
                                >
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Nav;
