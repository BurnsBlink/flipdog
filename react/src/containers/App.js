import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
      </Router>
    )
  }
}

export default App;
