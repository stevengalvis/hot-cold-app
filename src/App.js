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
      guessList: [],
      feedback: ''
    }


  }

  checkUserGuess(userGuess) {
    if (this.state.userGuess !== this.state.winningNumber) {
      // console.log(this.state);
        this.setGuessList(userGuess);
    }
    this.renderFeedback(userGuess);

  }

  renderFeedback(userGuess) {
    let numberDifference = Math.abs(this.state.winningNumber - this.state.userGuess);
    console.log(numberDifference);
  }

  setUserGuess(userGuess) {
    this.setState({
      userGuess
    });
    this.checkUserGuess(userGuess);


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
            <FeedBack />
            <GuessForm onChange={userGuess => this.setUserGuess(userGuess)}/>
            <GuessList userGuess={this.state.userGuess} guessList={this.state.guessList}/>
          </div>
        );
      }
  }


export default App;
