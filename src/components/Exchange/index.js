import React, { Component } from 'react';
import '../../App.css';
import MyDeck from './MyDeck';
import MyDemand from './MyDemand';

class Exchange extends Component {
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
          <div className="exchange">
            <MyDeck onSendResult={this.onSelectMyDeck}/>
            {this.state.myDeck && 
            <MyDemand onSendResult={this.onSelectMyDemand}/>}
            {this.state.myDemand &&
            <>
              <div>{`나 : ${Object.keys(this.state.myDeck).map(key => `${this.state.myDeck[key]} `)}`}</div>
              <div>{`너 : ${Object.keys(this.state.myDemand).map(key => `${this.state.myDemand[key]} `)}`}</div>
            </>}
          </div>
        );
    }
}

export default Exchange;