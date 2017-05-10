import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PostTile from '../components/PostTile';
import ThemesController from '../containers/ThemesController';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getPostData = this.getPostData.bind(this)
    this.getCurrentTheme = this.getCurrentTheme.bind(this)
  }

  componentDidMount() {
    this.getPostData()
    this.getCurrentTheme()
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
        description: posts.description,
        userId: posts.user.id,
        voteCount: posts.vote_count,
        firstName: posts.user.first_name,
        lastInitial: posts.user.last_name[0]
      })
    })
  }

  getCurrentTheme() {
    fetch(`/api/v1/themes`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(theme => {
      this.setState({
        themeId: theme.id,
        theme: theme.theme
      })
    })
  }

  render() {
    return(
      <div>
        <h1 className="title">flipdog</h1>
        <h5 className="footer">Current Theme:<span id={this.state.theme}> {this.state.theme}</span></h5>
        <hr width="20%"/>
        <PostTile
          nextDog={this.getPostData}
          key={this.state.id}
          id={this.state.id}
          dogName={this.state.dogName}
          image={this.state.image}
          description={this.state.description}
          firstName={this.state.firstName}
          lastInitial={this.state.lastInitial}
          voteCount={this.state.voteCount}
        />
        <ThemesController
          themeId={this.state.themeId}
          theme={this.state.theme}
        />
      </div>
    )
  }
}

export default Home;
