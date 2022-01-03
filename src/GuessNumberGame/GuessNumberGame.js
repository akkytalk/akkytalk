import React, { useState } from "react";

import "./GuessNumberGame.scss";

function GuessNumberGame() {
  const [guessnumber, setGuessnumber] = React.useState();

  const [corretNumber, setCorretNumber] = useState(
    Math.floor(Math.random() * 100 + 1)
  );

  let [guesses, setGuess] = useState([]);

  function playGame() {
    let numberGuess = document.getElementById("number-guess").value;
    // console.log("numberGuess", numberGuess);

    displayResult();
    saveGuessHistory(numberGuess);
  }

  function displayResult() {
    if (guessnumber > corretNumber) {
      showNumberAbove();
    } else if (guessnumber < corretNumber) {
      showNumberBelow();
    } else if (guessnumber == corretNumber) {
      showYouWon();
    }
  }

  function restartGame() {
    setCorretNumber(Math.floor(Math.random() * 100 + 1));
    setGuess([]);
    document.getElementById("result").innerHTML = "";
  }

  function saveGuessHistory(guess) {
    setGuess(guesses?.concat(guess));
  }
  // console.log("guesses", guesses);

  function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>";
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>";
        break;
      default:
        return "<div></div>";
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
  }

  function showYouWon() {
    const text = "Awesome job, you got it!";
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'won' and text parameters
     */
    // *CODE GOES BELOW HERE *

    let dialog = getDialog("won", text);
    document.getElementById("result").innerHTML = dialog;
  }

  function showNumberAbove() {
    const text = "Your guess is too high!";
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters
     */
    // *CODE GOES BELOW HERE *
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
  }

  function showNumberBelow() {
    const text = "Your guess is too low!";
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters
     */
    // *CODE GOES BELOW HERE *
    let dialog = getDialog("warning", text);

    document.getElementById("result").innerHTML = dialog;
  }

  return (
    <div className="guess-number">
      <div class="text-center">
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="/guessnumber">
            Guess The Number
          </a>
        </nav>
        <div>
          <h1 class="banner p-3">1.2.3.</h1>
          <div class="form-group ">
            <input
              id="number-guess"
              class="form-control form-control-lg"
              type="number"
              placeholder="What's your guess?"
              value={guessnumber}
              onChange={(e) => setGuessnumber(e.target.value)}
            />
          </div>
          <div id="result"></div>
          <button
            type="button"
            id="number-submit"
            class="btn btn-lg btn-secondary"
            onClick={playGame}
          >
            Check Me
          </button>
          <button
            type="button"
            id="restart-game"
            onClick={restartGame}
            class="btn btn-lg btn-light"
          >
            Restart
          </button>
          <div id="history" className="show-history">
            {guesses?.map((guess) => (
              <ul className="list-group ">
                <li className="list-group-item">you guessed {guess}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuessNumberGame;
