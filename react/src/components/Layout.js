import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: false
    }
  }


  render() {
    return(
      <div>
        <div className="menu">
          <Link className="navbar" to={`/`}>Home</Link>
          <Link className="navbar" to={`/users/1`}>Profile</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
