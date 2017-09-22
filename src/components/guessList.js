import React from 'react';

export default function GuessList(props) {

  let guessList = props.guessList.map((guess, index) =>
  <li key={index}>{guess}</li>

  );
  return (
    // list items
    <div className="guessList">
      <span>{props.userGuess}</span>
      <h2>Total Guesses = {props.count}</h2>
      <h3>Your guessed numbers</h3>
      <ul>
        {guessList}
      </ul>
      </div>

  )
}
