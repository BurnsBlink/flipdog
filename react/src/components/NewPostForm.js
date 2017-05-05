import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const NewPostForm = props => {
  return(
    <form onSubmit={props.handleSubmit}>
      Dog Name: <input type="text" value={props.dogName} onChange={props.handleNewDogName} />
      Description: <input type="text" value={props.description} onChange={props.handleNewDescription} />
      Photo: <center><input type="file" value={props.image} onChange={props.handleNewImage} /></center>
      <input type='submit' />
    </form>

  )
}

export default NewPostForm;
