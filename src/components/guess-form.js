import React from 'react';

export default function GuessForm(props) {
  return (
    <form onSubmit={e => {
        e.preventDefault();
        props.onChange(e.target.firstChild.value);
        e.target.firstChild.value = '';
      }}>
      <input type="number" name="userGuess" id="userGuess" placeholder="Enter your guess" required


        />
      <input type="submit" id="guessButton" name="submit" value="Guess"/>
      </form>

  )
}
