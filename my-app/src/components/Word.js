import React from "react";

const Word = ({ selectedWord, rightLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {rightLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
