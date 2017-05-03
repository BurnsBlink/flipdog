import React from 'react';
import { Link, browserHistory } from 'react-router';

const ProfileTile = props => {
  return (
    <div className="row">
    <button onClick={browserHistory.goBack}>Back</button>
      <p>Hi there {props.email}!</p>
    </div>
  );
}

export default ProfileTile;
