import React from 'react';
import { Link, browserHistory } from 'react-router';

const Home = props => {
  return(
    <div>
      <h1>Skal</h1>
      {props.children}
    </div>
  )
}

export default Home;
