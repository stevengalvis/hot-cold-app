import React from 'react';

export default function GuessList(props) {

  let guessList = props.guessList.map((guess, index) =>
  <li key={index}>{guess}</li>

  );
  return (
    // list items
    <div className="guessList">
      <span>{props.userGuess}</span>
      <ul>
        {guessList}
      </ul>
      </div>

  )
}
