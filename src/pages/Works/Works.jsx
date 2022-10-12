import React,{useEffect} from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import backhome from "../../assets/backhome.png";
import ProjectItem from "../../containers/projectItem/ProjectItem.jsx";
import { getData } from "../../apirequest.jsx";

import "./works.css";

const Works = () => {
    const [works, setWorks] = React.useState(null);
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        getData("api/allworks").then((res) => {
            setWorks(res.data);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <Link to="/">
                <Button
                    variant="dark"
                    className="page-title border-gradient border-gradient-purple"
                >
                    <img
                        src={backhome}
                        style={{
                            height: "1rem",
                            width: "1rem",
                            marginRight: ".5rem",
                        }}
                    />
                    Home
                </Button>
            </Link>
            {loading === true ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20%",
                    }}
                >
                    <Spinner animation="border" variant="danger" />
                </div>
            ) : (
                <div className="work-container" id="workPage">
                    <Container>
                        <h1 className="page-alternate ">Our Works</h1>
                        <Row>
                            {works.map((res) => {
                                return (
                                    <>
                                        <Col>
                                            <ProjectItem
                                                img={res.image_link}
                                                title={res.title}
                                                desc={res.description}
                                            />
                                        </Col>
                                        <Col></Col>
                                    </>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Works;

// <Card style={{
//         width: "25rem",
//         height: "20rem",
//         marginTop: "2rem",
//     }}
// >
//     <Card.Img
//         variant="top"
//         src={res.image_link}
//         style={{ height: "50rem" }}
//     />
//     <Card.Body>
//         <Card.Title>{res.title}</Card.Title>
//         <Card.Text>{res.description}</Card.Text>
//     </Card.Body>
