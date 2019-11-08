import React from "react";
import "./Score.css"

//stateless component
const Score = props => (
  <div className="gameScore">
    <h3 className="score highScore">Score: {props.total}  --   HighScore: {props.highScore}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;