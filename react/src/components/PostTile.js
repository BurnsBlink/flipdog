import React from 'react';
import { Link, browserHistory } from 'react-router';

const PostTile = props => {
  return (
    <div className="main-body">
      <p className="dog-name">=={props.dogName}==</p>
      <img className="upload" src={props.image}/>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default PostTile;
