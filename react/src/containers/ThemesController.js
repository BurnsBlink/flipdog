import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ThemeTile from '../components/ThemeTile';

class ThemesController extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/themeposts`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(posts => {
      this.setState({
        winnerId: posts[2].id,
        winnerHuman: posts[2].user.first_name + ' ' + posts[2].user.last_name,
        winnerDogName: posts[2].dog_name,
        winnerImage: posts[2].image_url,
        winnerDescription: posts[2].description,
        winnerVotes: posts[2].vote_count,
        secondId: posts[1].id,
        secondHuman: posts[1].user.first_name + ' ' + posts[1].user.last_name,
        secondDogName: posts[1].dog_name,
        secondImage: posts[1].image_url,
        secondDescription: posts[1].description,
        secondVotes: posts[1].vote_count,
        thirdId: posts[0].id,
        thirdHuman: posts[0].user.first_name + ' ' + posts[0].user.last_name,
        thirdDogName: posts[0].dog_name,
        thirdImage: posts[0].image_url,
        thirdDescription: posts[0].description,
        thirdVotes: posts[0].vote_count
      })
    })
  }


  render() {
    return(
      <div>
        <ThemeTile
          winnerId={this.state.winnerId}
          winnerHuman={this.state.winnerHuman}
          winnerDogName={this.state.winnerDogName}
          winnerImage={this.state.winnerImage}
          winnerDescription={this.state.winnerDescription}
          winnerVotes={this.state.winnerVotes}
          secondId={this.state.secondId}
          secondHuman={this.state.secondHuman}
          secondDogName={this.state.secondDogName}
          secondImage={this.state.secondImage}
          secondDescription={this.state.secondDescription}
          secondVotes={this.state.secondVotes}
          thirdId={this.state.thirdId}
          thirdHuman={this.state.thirdHuman}
          thirdDogName={this.state.thirdDogName}
          thirdImage={this.state.thirdImage}
          thirdDescription={this.state.thirdDescription}
          thirdVotes={this.state.thirdVotes}
        />
      </div>
    )
  }
}

export default ThemesController;
