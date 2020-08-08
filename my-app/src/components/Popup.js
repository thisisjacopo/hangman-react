import React, { useEffect } from "react";
import { checkWin } from "../helpers/Helpers";
const Popup = ({
  rightLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playble = true;

  if (checkWin(rightLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congrats Champ, You Won!";
    playble = false;
  } else if (checkWin(rightLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Sorry, you lost! try again!";
    finalMessageRevealWord = `...the word you were looking for was: ${selectedWord}`;
    playble = false;
  }

  useEffect(() => {
    setPlayable(playble);
  });

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
