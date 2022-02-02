import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

const Card_About = (props) => {
  return (
    <div className="card_container">
      {/*   <div className="card-style"> */}
      {/*     <Card.Body>{props.children}</Card.Body> */}
      {/*   </div> */}
      {/* </div> */}

      <Card
        style={{
          backgroundImage: "linear-gradient(#6a3093,#a044ff)",
          borderRadius: "20px",
        }}
      >
        <Card.Body>{props.children}</Card.Body>
      </Card>
    </div>
  );
};

export default Card_About;
