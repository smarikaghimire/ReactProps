import React from "react";
import "./card.css"; // Import the CSS file

const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.topic}></img>
      <div className="card-content">
        <h3>{props.topic}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Cards;
