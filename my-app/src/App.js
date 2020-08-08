import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { showNotification as show } from "./helpers/Helpers";
import "./App.css";

const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "africa",
  "catnip",
  "standard",
  "newspaper",
  "tesla",
  "ferrari",
  "pizza",
  "president",
  "holidays",
  "summer",
  "australia",
  "lemon",
  "javascript",
  "burbon",
  "country",
  "mile",
  "princess",
  "asleep",
  "vulcano",
  "winter",
  "snow",
  "developer",
  "london",
  "brazil",
  "airplane",
  "argentina",
  "twister",
  "chocolate",
  "nutella",
  "broccoli",
  'subtitle',
  'cinema',
  'music',
  'berlin',
  'chess',
  'newborn',
  'air',
  'cards',
  'poker',
  'female',
  'lumen',
  'coffee'
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [rightLetters, setRightLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!rightLetters.includes(letter)) {
            setRightLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [rightLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setRightLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} rightLetters={rightLetters} />
      </div>
      <Popup
        rightLetters={rightLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
