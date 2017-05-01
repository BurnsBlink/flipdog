import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PostTile from '../components/PostTile';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.getPostData = this.getPostData.bind(this)
  }

  componentDidMount() {
    this.getPostData()
  }

  getPostData() {
    fetch(`/api/v1/posts`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(posts => {
      this.setState({
        id: posts.id,
        dogName: posts.dog_name,
        image: posts.image_url,
        description: posts.description
      })
    })
  }

  render() {
    return(
      <div>
        <h1 className="title">flipdog</h1>
        <PostTile
          nextDog={this.getPostData}
          key={this.state.id}
          id={this.state.id}
          dogName={this.state.dogName}
          image={this.state.image}
          description={this.state.description}
        />
      </div>
    )
  }
}

export default Home;
