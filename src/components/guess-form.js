import React from 'react';

export default function GuessForm(props) {
  return (
    <div className="form-group">
      <input type="number" name="userGuess" id="userGuess" placeHolder="Enter your guess" required/>
      <input type="submit" id="guessButton" name="submit" value="Guess"
      </div>

  )
}
