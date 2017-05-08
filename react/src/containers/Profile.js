import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ProfileTile from '../components/ProfileTile';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      names: [],
      descriptions: [],
      images: []
    }
    this.getProfileData = this.getProfileData.bind(this)
  }

  componentDidMount() {
    this.getProfileData()
    // let i=0
    // for (i=0; i<this.state.posts.length; i++) {
    //   this.state.names.push(this.state.posts[i].dog_name)
    //   this.state.descriptions.push(this.state.posts[i].description)
    //   this.state.images.push(this.state.posts[i].image_url)
    // }
  }

  getProfileData() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(user => {
      this.setState({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        posts: user.posts
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
        />
      </div>
    )
  }
}

export default Profile;
