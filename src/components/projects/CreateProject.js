import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../redux/actions/projectActions'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

class CreateProject extends Component {
state = {
    title: '',
    content: '',
    imageData: [],
    imageUrl: '',
    videoData: [],
    videoUrl: ''
}

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.createProject(this.state)
  this.props.history.push('/');
}

handleImageUpload = (e) => {
  const values = e.target.files;
  [...values].forEach(file => {
  this.setState({ imageData: file, imageUrl: URL.createObjectURL(file)})
  })
}


handleVideoUpload = (e) => {
  const values = e.target.files;
  [...values].forEach(file => {
  this.setState({ videoData: file, videoUrl: URL.createObjectURL(file)})
  })
}

render() {
  const { auth } = this.props
  if (!auth.uid) return <Redirect to='/signin' />

    return (
        <Dash className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Post New Update / News</h5>
            <div className="input-field">
              <label htmlFor="title"> Title </label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content"> Post Content </label>
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange}> </textarea>
            </div>
            <div className="file-field input-field">
            <div class="btn blue">
                <span>Upload Image</span>
                <input onChange={this.handleImageUpload} accept="image/*" type="file" multiple/>
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" placeholder="Upload one or more images" />
            </div>
            </div>
            <div className="file-field input-field">
            <div class="btn blue">
                <span>Upload Video</span>
                <input onChange={this.handleVideoUpload} accept="video/*" type="file" multiple />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" placeholder="Upload one or more videos" />
            </div>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-index-0">Create</button>
            </div>
          </form>
        </Dash>
    )
  }
}


const Dash = styled.div`
margin-top: 15vh;
`;


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CreateProject)
