import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let clicker = !this.state.menu
    this.setState({ menu: clicker })
  }

  render() {
    let showing
      if (this.state.menu) {
        showing = "show"
      } else {
        showing = "hidden"
      }

    return(
      <div>
        <div>
          <div onClick={this.handleClick}>
            <Link className="navbar" to={`/`}>Home</Link>
            <Link className="navbar" to={`/users/1`}>Profile</Link>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
