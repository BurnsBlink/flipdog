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
    let className, id, src
    if (this.state.menu === true){
      className = "menu-show"
      id = "img-bkgd"
      src = "https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_close-128.png"
    } else {
      className = "menu-hide"
      id = ""
      src = "https://www.pcta.org/wp-content/themes/pcta/images/p3/menu-toggle.png?x81138"
    }

    let onClick = () => {
      this.handleMenuClick(true)
    }

    return(
      <div>
        <img onClick={onClick} className='menu-image' id={id} src={src}/>
          <Link className={className} to={`/`}>Home</Link>
          <Link className={className} to={`/users/1`}>Profile</Link>
          <Link className={className} to={`/themes`}>Past Winners</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
