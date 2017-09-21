import React from 'react';

export default function GuessForm(props) {
  return (
    <form>
      <input type="number" name="userGuess" id="userGuess" placeholder="Enter your guess" required/>
      <input type="submit" id="guessButton" name="submit" value="Guess"/>
      </form>

  )
}
