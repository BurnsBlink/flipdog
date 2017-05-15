import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PostTile from '../components/PostTile';
import ThemesController from '../containers/ThemesController';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getPostData = this.getPostData.bind(this)
    this.getCurrentTheme = this.getCurrentTheme.bind(this)
    this.getSignedInUser = this.getSignedInUser.bind(this)
  }

  componentDidMount() {
    this.getPostData()
    this.getCurrentTheme()
    this.getSignedInUser()
  }

  getPostData() {
    fetch(`/api/v1/posts`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(posts => {
      if (posts !== null){
      this.setState({
          id: posts.id,
          dogName: posts.dog_name,
          image: posts.image_url,
          description: posts.description,
          userId: posts.user.id,
          voteCount: posts.vote_count,
          firstName: posts.user.first_name,
          lastInitial: posts.user.last_name[0]
        })} else {
          this.setState({
          dogName: "No uploads yet!",
          description: "Be the first! Click add photo",
          image: "http://www.westmountanimalclinic.com/wp-content/uploads/2016/01/dog_question-300x225.jpg"
        })
      }
    })
  }

  getCurrentTheme() {
    fetch(`/api/v1/themes`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(theme => {
      this.setState({
        theme: theme.theme,
        dateSwitch: theme.date,
        nextTheme: theme.next_theme
      })
    })
  }

  getSignedInUser() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(user => {
      this.setState({
        currentUser: user.id
      })
    })
  }

  render() {
    return(
      <div>
        <h1 className="title">flipdog</h1>
        <h5 className="theme-layout">Current Theme:<span id={this.state.theme}> {this.state.theme}</span></h5>
        <hr width="20%"/>
        <PostTile
          nextDog={this.getPostData}
          currentUser={this.state.currentUser}
          key={this.state.id}
          id={this.state.id}
          dogName={this.state.dogName}
          image={this.state.image}
          description={this.state.description}
          firstName={this.state.firstName}
          lastInitial={this.state.lastInitial}
          voteCount={this.state.voteCount}
        />
        <div className="footer">
          <hr width="80%"/>
          <p className="countdown">Next Theme " <span className={this.state.nextTheme}>{this.state.nextTheme}</span> " @ {this.state.dateSwitch} EST</p>
        </div>
      </div>
    )
  }
}

export default Home;
