import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const NewPostForm = props => {
  return(
    <form onSubmit={props.handleSubmit}>
      Dog Name: <center><input className="react-form" type="text" value={props.dogName} onChange={props.handleNewDogName} /></center>
      Description: <center><input className="react-form" type="text" value={props.description} onChange={props.handleNewDescription} /></center>
      Photo: <center><input className="react-form" type="text" value={props.image} onChange={props.handleNewImage} /></center>
      <input type='submit' />
    </form>
  )
}

export default NewPostForm;
