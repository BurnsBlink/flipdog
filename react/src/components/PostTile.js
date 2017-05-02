import React from 'react';
import { Link, browserHistory } from 'react-router';

const PostTile = props => {
  return (
    <div className="row">
      <div className="large-4 columns">
        <h1 className="dog-name">{props.dogName}</h1>
        <p className="description">{props.description}</p>
      </div>
      <div className="large-4 columns">
        <img className="upload" src={props.image}/>
      </div>
      <div className="large-4 columns">
        <button className="upvote" onClick={props.nextDog}>Upvote!</button><br/>
        <button className="next" onClick={props.nextDog}>Next</button>
      </div>
    </div>
  );
}

export default PostTile;