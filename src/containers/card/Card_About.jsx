import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

const Card_About = (props) => {
  return (
    <div className="card_container">
      <Card style={{ backgroundColor: "#d53a9d", borderRadius: "10px" }}>
        <Card.Body>{props.body}</Card.Body>
      </Card>
    </div>
  );
};

export default Card_About;
