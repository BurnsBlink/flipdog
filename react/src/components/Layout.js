import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: null
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(event){
    if (this.state.menu === event) {
      this.setState({ menu: null})
    } else {
      this.setState({ menu: true })
    }
  }

  render() {
    let className
    let id
    if (this.state.menu === true){
      className = "menu-show"
      id = "img-bkgd"
    } else {
      className = "menu-hide"
      id = ''
    }

    let onClick = () => {
      this.handleMenuClick(true)
    }

    return(
      <div>
        <img onClick={onClick} className='menu-image' id={id} src="https://www.pcta.org/wp-content/themes/pcta/images/p3/menu-toggle.png?x81138"/>
          <Link className={className} to={`/`}>Home</Link>
          <Link className={className} to={`/users/1`}>Profile</Link>
          <Link className={className} to={`themes`}>Past Winners</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
