import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Layout from '../components/Layout';
import NewPost from '../containers/NewPost';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path="/" component={Home}/>
          <Route path="/users/1" component={Profile}/>
          <Route path="/posts/new" component={NewPost}/>
        </Route>
      </Router>
    )
  }
}

export default App;
