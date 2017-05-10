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
      message: []
    }
    this.handleNewDogName = this.handleNewDogName.bind(this)
    this.handleNewDescription = this.handleNewDescription.bind(this)
    this.handleNewImage = this.handleNewImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(user => {
      this.setState({
        id: user.id
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

  handleSubmit(event){
    event.preventDefault()
    let requestBody = {
      user_id: this.state.id,
      dog_name: this.state.dogName,
      description: this.state.description,
      image_url: this.state.image
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

  render() {
    return(
      <div>
        <button className="back" onClick={browserHistory.goBack}>Back</button>
        <h2 className="title-form">Dress your Pup up and share!</h2>
        <NewPostForm
          handleNewDogName={this.handleNewDogName}
          handleNewDescription={this.handleNewDescription}
          handleNewImage={this.handleNewImage}
          handleSubmit={this.handleSubmit}
          name={this.state.dogName}
          description={this.state.description}
          image={this.state.image}
        />
      </div>
    )
  }
}

export default NewPost;
