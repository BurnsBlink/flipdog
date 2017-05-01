import React from 'react';
import { Link, browserHistory } from 'react-router';

const ProfileTile = props => {
  return (
    <div className="row">
      <p>{props.email}</p>
    </div>
  );
}

export default ProfileTile;
