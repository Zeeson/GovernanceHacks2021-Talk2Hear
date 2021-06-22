import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../redux/actions/projectActions'

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
}

handleImageUpload = (e) => {
  const values = e.target.files;
  [...values].forEach(file => {
    console.log(file)
  this.setState({ imageData: file, imageUrl: URL.createObjectURL(file)})
  })
  // this.setState({ data: e.target.files[0]});
}


handleVideoUpload = (e) => {
  const values = e.target.files;
  [...values].forEach(file => {
    console.log(file)
  this.setState({ videoData: file, videoUrl: URL.createObjectURL(file)})
  })
}

// componentDidMount(){
//   this.handleImageUpload.bind(this)
// }

render() {
  console.log(this.state)
    return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Create New Project</h5>
            <div className="input-field">
              <label htmlFor="title"> Title </label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content"> Project Content </label>
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
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
