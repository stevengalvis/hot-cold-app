import React, { Component } from 'react';

import './App.css';
import GuessForm from './components/guess-form';
import GuessList from './components/guessList'
import FeedBack from './components/feedback';

class App extends Component {
  constructor(props) {
    super(props);

    const winningNumber = Math.floor(Math.random() * (100 - 1) + 1).toFixed();
    console.log(winningNumber);


    this.state = {
      winningNumber,
      userGuess: '',
      guessList: [],
      feedback: '',
      count: 0
    }


  }


  checkUserGuess(userGuess) {
    if (this.state.userGuess !== this.state.winningNumber) {
        this.renderFeedback(userGuess);
        this.setGuessList(userGuess);

    }
     else if  (this.state.userGuess === this.state.winningNumber) {
       this.setFeedback('you win!');
         this.setGuessList(userGuess);
     }


  }

  renderFeedback(userGuess) {

    let numberDifference = Math.abs(this.state.winningNumber - this.state.userGuess);

    if (numberDifference >= 15) {
      this.setFeedback('cold');
    }
    else if(numberDifference >= 30) {
      this.setFeedback('very cold');
    }

    else {
      this.setFeedback('hot');
    }

  }

  setUserGuess(guessSubmitted) {
    this.setState({
      userGuess: guessSubmitted,
      count: this.state.count+=1
    },function(){
      // this.setGuessList(guessSubmitted);
      console.log(this.state);
      this.checkUserGuess(guessSubmitted);
      // this.checkUserGuess(guessSubmitted);
    } );
  }


    setFeedback(feedback) {
      this.setState({
        feedback
      });
    }

      setGuessList(userGuess) {
        this.setState({
          guessList: [...this.state.guessList,
            userGuess
          ]
        });
      }



      render() {
        return (
          <div className="App">
            <div className="App-header">
            </div>
            <FeedBack feedback={this.state.feedback} />
            <GuessForm onChange={val => this.setUserGuess(val)}/>
            <GuessList userGuess={this.state.userGuess} guessList={this.state.guessList} count={this.state.count}/>
          </div>
        );
      }
  }


export default App;
