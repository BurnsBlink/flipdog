import React from 'react';
import { Link, browserHistory } from 'react-router';

const ProfileTile = props => {
  return (
    <div className="row">
    <button className="back" onClick={browserHistory.goBack}>Back</button>
      <p>Hi there {props.firstName}!</p>
    </div>
  );
}

export default ProfileTile;
