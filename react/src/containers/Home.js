import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PostTile from '../components/PostTile';
import themes from '../constants/themes'

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

  handleNew() {
    window.location.href="/posts/new";
  }

  render() {
    let theme = "Star-Wars"
    return(
      <div>
        <h1 className="title">flipdog</h1>
        <h5 id="footer" className={theme}>Current Theme: {theme}</h5>
        <PostTile
          nextDog={this.getPostData}
          key={this.state.id}
          id={this.state.id}
          dogName={this.state.dogName}
          image={this.state.image}
          description={this.state.description}
          userName={this.state.userName}
          handleNew={this.handleNew}
        />
      </div>
    )
  }
}

export default Home;
