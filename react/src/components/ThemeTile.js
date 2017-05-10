import React from 'react';
import { Link, browserHistory } from 'react-router';

const ThemeTile = props => {
  return (
    <div className="row">
      <div className="large-4 columns">
        <h6 className="whiteout">.</h6>
      </div>

      <div className="large-4 columns">
        <div className="winner">
          <h4><span className="finalist">Human:</span> <span className="human-finalist">{props.winnerHuman}</span></h4>
          <h5><span className="finalist">Dog:</span> <span className="dog-finalist">{props.winnerDogName}</span></h5>
          <p className="description-finalist">{props.winnerDescription}</p>
          <img className="image-finalist" src={props.winnerImage}/>
        </div>

        <div className="second">
          <h4><span className="finalist">Human:</span> <span className="human-finalist">{props.secondHuman}</span></h4>
          <h5><span className="finalist">Dog:</span> <span className="dog-finalist">{props.secondDogName}</span></h5>
          <p className="description-finalist">{props.secondDescription}</p>
          <img className="image-finalist" src={props.secondImage}/>
        </div>

        <div className="third">
          <h4><span className="finalist">Human:</span> <span className="human-finalist">{props.thirdHuman}</span></h4>
          <h5><span className="finalist">Dog:</span> <span className="dog-finalist">{props.thirdDogName}</span></h5>
          <p className="description-finalist">{props.thirdDescription}</p>
          <img className="image-finalist" src={props.thirdImage}/>
        </div>
      </div>

      <div className="large-4 columns">
        <h6 className="whiteout">.</h6>
      </div>
    </div>
  );
}

export default ThemeTile;
