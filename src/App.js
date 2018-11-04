import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyDeck from './components/MyDeck';
import MyDemand from './components/MyDemand';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDeck: null,
      myDemand: null,
    }
  }
    onSelectMyDeck = (selectResult) => {
      this.setState({
        myDeck: selectResult,
      })
    }
    onSelectMyDemand = (selectResult) => {
      this.setState({
        myDemand: selectResult,
      })
    }
    render() {
        return (
          <div className="App">
            <MyDeck onSendResult={this.onSelectMyDeck}/>
            {this.state.myDeck && 
            <MyDemand onSendResult={this.onSelectMyDemand}/>}
            {this.state.myDemand &&
            <>
              <h2>{`나 : ${Object.keys(this.state.myDeck).map(key => `${this.state.myDeck[key]} `)}`}</h2>
              <h2>{`너 : ${Object.keys(this.state.myDemand).map(key => `${this.state.myDemand[key]} `)}`}</h2>
            </>}
          </div>
        );
    }
}

export default App;
