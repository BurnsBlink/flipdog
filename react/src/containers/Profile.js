import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ProfileTile from '../components/ProfileTile';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(user => {
      this.setState({
        id: user.id,
        email: user.email
      })
    })
  }

  render() {
    return(
      <div>
        <ProfileTile
          id={this.state.id}
          email={this.state.email}
        />
      </div>
    )
  }
}

export default Profile;
