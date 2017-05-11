import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class PostTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      voteCount: this.props.voteCount,
      clicker: 0
    }
    this.handleUpVote = this.handleUpVote.bind(this)
  }

  handleUpVote() {
    if (this.state.clicker === 0) {
      let upvote = this.state.voteCount + 1
      let clicked = this.state.clicker + 1
      this.setState({
        voteCount: upvote,
        clicker: clicked
      })
    }
  }

  render() {
    return (
      <div className="row">
      <div className="small-12 columns">
        <div className="large-4 columns">
          <h1 className="dog-name">{this.props.dogName}</h1>
          <p className="description">{this.props.description}</p>
          <p className="poster-name">human: {this.props.firstName} {this.props.lastInitial}.</p>
        </div>
        <div className="content large-4 columns">
          <p className="vote-count">{this.state.voteCount}</p>
          <img className="upload" src={this.props.image}/>
        </div>
          <div className="small-4 columns">
          <button className="upvote" onClick={this.handleUpVote}>Upvote!</button><br/>
          </div>
          <div className="small-4 columns">
          <button className="next" onClick={this.props.nextDog}>Next</button><br/>
          </div>
          <div className="small-4 columns">
          <Link to={`/posts/new`}>
            <button className="create">Add Photo!</button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTile;
