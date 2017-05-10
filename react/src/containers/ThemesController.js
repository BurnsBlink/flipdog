import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class ThemesController extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
      <h2>Skal</h2>
        <h1>{this.props.theme}</h1>
      </div>
    )
  }
}

export default ThemesController;
