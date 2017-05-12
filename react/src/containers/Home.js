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
        theme: theme.theme
      })
    })
  }

  handleVoteCount(event){
    let newVoteCount = event.target.value
    this.setState({ voteCount: newVoteCount })
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
      </div>
    )
  }
}

export default Home;
