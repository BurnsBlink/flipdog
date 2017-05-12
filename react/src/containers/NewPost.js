import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import NewPostForm from '../components/NewPostForm';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      dogName: '',
      description: '',
      image: '',
      message: [],
      selectedInstructions: null
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleNewDogName = this.handleNewDogName.bind(this)
    this.handleNewDescription = this.handleNewDescription.bind(this)
    this.handleNewImage = this.handleNewImage.bind(this)
    this.handleThemeId = this.handleThemeId.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectedInstruction = this.handleSelectedInstruction.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(user => {
      this.setState({
        id: user.id
      })
    })
    fetch(`/api/v1/themes`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(theme => {
      this.setState({
        themeId: theme.id,
        theme: theme.theme
      })
    })
  }

  handleNewDogName(event){
    let newDogName = event.target.value
    this.setState({ dogName: newDogName })
  }

  handleNewDescription(event){
    let newDescription = event.target.value
    this.setState({ description: newDescription })
  }

  handleNewImage(event){
    let newImage = event.target.value
    this.setState({ image: newImage })
  }

  handleThemeId(event){
    let theTheme = event.target.value
    this.setState({ themeId: theTheme })
  }

  handleSubmit(event){
    event.preventDefault()
    let requestBody = {
      user_id: this.state.id,
      dog_name: this.state.dogName,
      description: this.state.description,
      image_url: this.state.image,
      theme_id: this.state.themeId
    }
    fetch('/api/v1/posts', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      credentials: 'include'
    })
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(message => {
      this.setState({ message: message })
    })
    browserHistory.push('/')
  }

  handleSelectedInstruction(event){
    if (this.state.selectedInstructions === event) {
      this.setState({ selectedInstructions: null})
    } else {
      this.setState({ selectedInstructions: true })
    }
  }

  render() {
    let className
    if (this.state.selectedInstructions === true){
      className = "show"
    } else {
      className = "hide"
    }

    let onClick = () => {
      this.handleSelectedInstruction(true)
    }
    return(
      <div>
        <button className="back" onClick={browserHistory.goBack}>Back</button><br/><br/>
        <h2 className="title-form">Dress your Pup up and share!</h2>
        <h5 className="footer">Current Theme:<span id={this.state.theme}> {this.state.theme}</span></h5><br/>
        <NewPostForm
          handleNewDogName={this.handleNewDogName}
          handleNewDescription={this.handleNewDescription}
          handleNewImage={this.handleNewImage}
          handleThemeId={this.handleThemeId}
          handleSubmit={this.handleSubmit}
          name={this.state.dogName}
          description={this.state.description}
          image={this.state.image}
          themeId={this.state.themeId}
          theme={this.state.theme}
          className={className}
          onClick={onClick}
        />
      </div>
    )
  }
}

export default NewPost;
