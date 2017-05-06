import React from 'react';
import { Link, browserHistory } from 'react-router';

const ProfileTile = props => {
  return (
    <div className="row">
      <div className="large-4 columns">
        <p>Hi there {props.firstName}!</p>
        <img src="https://thumb.ibb.co/mX2G6Q/Screen_Shot_2017_04_25_at_10_31_58_PM.png" />
      </div>
      <div className="profile-posts large-8 columns">
        <p>Doggy Picture here!</p>
        <p>Doggy name here!</p>
        <p>Doggy description here!</p>
      </div>
      <button className="back" onClick={browserHistory.goBack}>Back</button>
    </div>
  );
}

export default ProfileTile;
