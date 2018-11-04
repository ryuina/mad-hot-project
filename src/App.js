import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Exchange from './components/Exchange';
import Home from './components/Home';

class App extends Component {
    render() {
        return(
            <Router>
                <div className="app">
                    <Route path="/" exact component={Home} />
                    <Route path="/uploadExchange" component={Exchange} />
                </div>
            </Router>
        )
    }
}

export default App;
