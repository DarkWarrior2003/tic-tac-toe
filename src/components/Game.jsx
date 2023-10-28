import React, { useState } from "react";
import "./Game.css";
let data = ["", "", "", "", "", "", "", "", ""];

const Game = () => {
  const Play = (num) => {
    let [count, setcount] = useState(0);
    let [lock, setlock] = useState(false);

    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      document.getElementsByClassName(".boxes").style.color = "red";
      data[num] = "x";
      setcount(++count);
    } else {
      document.getElementsByClassName(".boxes").style.color = "blue";
      data[num] = "o";
      setcount(++count);
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div className="boxes" onClick={Play(0)}></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Game;
