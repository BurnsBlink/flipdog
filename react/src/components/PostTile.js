import React from 'react';
import { Link, browserHistory } from 'react-router';

const PostTile = props => {
  return (
    <div className="row">
      <div className="small-3 large-4 columns">
        <p className="dog-name">--{props.dogName}--</p>
        <p className="description">{props.description}</p>
      </div>
      <div className="small-3 large-4 columns">
        <img className="upload" src={props.image}/>
      </div>
      <div className="small-3 large-4 columns">
        <button className="upvote" onClick={props.nextDog}>Upvote!</button><br/>
        <button className="next" onClick={props.nextDog}>Next</button>
      </div>
    </div>
  );
}

export default PostTile;
