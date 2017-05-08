import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ProfileTile from '../components/ProfileTile';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogNames: [],
      descriptions: [],
      images: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getProfileData = this.getProfileData.bind(this)
  }

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(user => {
      this.setState({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        dogNames: user.posts.map(item => item.dog_name),
        descriptions: user.posts.map(item => item.description),
        images: user.posts.map(item => item.image_url)
      })
    })
  }

  render() {
    return(
      <div>
        <ProfileTile
          id={this.state.id}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          dogNames={this.state.dogNames}
          descriptions={this.state.descriptions}
          images={this.state.images}
        />
      </div>
    )
  }
}

export default Profile;
