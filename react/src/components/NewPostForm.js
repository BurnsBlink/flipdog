import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const NewPostForm = props => {
  return(
    <div className="instructions">
      <form onSubmit={props.handleSubmit}>
        Dog Name: <center><input className="react-form" type="text" value={props.dogName} onChange={props.handleNewDogName} required/></center>
        Description: <center><input className="react-form" type="text" value={props.description} onChange={props.handleNewDescription} /></center>
        Photo URL: <center><input className="react-form" type="text" value={props.image} onChange={props.handleNewImage} required/></center>

        <a onClick={props.onClick} href={`https://screenshot.net/free-image-uploader.html`} target="_blank">Upload your image here!</a><br/>
        <ul className={props.className}></ul>

        <input className="hidden" value={props.themeId} onChange={props.handleThemeId} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default NewPostForm;
