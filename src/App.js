import React, { Component } from 'react';
import logo from './logo.svg';
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
      guessList: '',
      feedback: ''
    }
    console.log(this.state);

  }


  setUserGuess(userGuess) {
    this.setState({
      userGuess
    });
  }


    setFeedback(feedback) {
      this.setState({
        feedback
      });
    }

      setGuessList(guessList) {
        this.setState({
          guessList
        });
      }

      checkUserGuess(userGuess) {
        if (this.state.userGuess !== this.state.winningNumber) {
          // render feedback
        }
      }

      render() {
        return (
          <div className="App">
            <div className="App-header">
            </div>
            <FeedBack />
            <GuessForm/>
            <GuessList />
          </div>
        );
      }
  }


export default App;
