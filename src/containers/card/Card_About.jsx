import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

const Card_About = () => {
  return (
    <div className="card_container">
      <Card style={{ backgroundColor: "#d53a9d", borderRadius: "10px" }}>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </div>
  );
};

export default Card_About;
