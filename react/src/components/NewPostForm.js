import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const NewPostForm = props => {
  let instrOne = <li>Choose photo to upload</li>
  let instrTwo = <li>-<span className="mobile">Mobile</span>: Touch and hold photo > Select copy</li>
  let instrThree = <li>-<span className="desktop">Desktop</span>: Right click photo > Select copy image address</li>

  return(
    <div className="instructions">
      <form onSubmit={props.handleSubmit}>
        Dog Name: <center><input className="react-form" type="text" value={props.dogName} onChange={props.handleNewDogName} required/></center>
        Description: <center><input className="react-form" type="text" value={props.description} onChange={props.handleNewDescription} /></center>
        Photo URL: <center><input className="react-form" type="text" value={props.image} onChange={props.handleNewImage} required/></center>

        <a onClick={props.onClick} href={`http://imgur.com/upload`} target="_blank">Upload your image here!</a><br/>
        <ul className={props.className}>{instrOne}{instrTwo}{instrThree}</ul>

        <input className="hidden" value={props.themeId} onChange={props.handleThemeId} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default NewPostForm;
