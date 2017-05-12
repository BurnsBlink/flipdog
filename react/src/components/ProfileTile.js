import React from 'react';
import { Link, browserHistory } from 'react-router';

const ProfileTile = props => {
  return (
    <div className="row">
      <div className="large-4 columns">
        <h3 className="profile-title">Hello there {props.firstName}!</h3>
        <img className="profile-pic" src="https://thumb.ibb.co/mX2G6Q/Screen_Shot_2017_04_25_at_10_31_58_PM.png" />
        <hr width="10%"/>
      </div>
      <div className="profile-posts large-8 columns">
        <h4 className="title-form">Most Recent Post:</h4>
        <img className="last-image"src={props.images.slice(-1)}/>
        <p className="dog-name">{props.dogNames.slice(-1)}</p>
        <p className="description">{props.descriptions.slice(-1)}</p>
        <hr width="80%"/>
        <h4 className="title-form">First Post:</h4>
        <img className="last-image"src={props.images[0]}/>
        <p className="dog-name">{props.dogNames[0]}</p>
        <p className="description">{props.descriptions[0]}</p>
        <hr width="80%"/>
      </div>
      <button className="back" onClick={browserHistory.goBack}>Back</button>
    </div>
  );
}

export default ProfileTile;
