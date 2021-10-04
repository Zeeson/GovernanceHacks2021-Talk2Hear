// import React, { Component} from 'react'
// import { connect } from 'react-redux'
// import { createSpending } from '../../redux/actions/spendingActions'
// import { Redirect, NavLink } from 'react-router-dom'
// import { RegionDropdown } from 'react-country-region-selector';

class CreateSpending extends Component {
state = {
    content: '',
    notables: '',
    imageData: [],
    imageUrl: '',
    videoData: [],
    videoUrl: '',
    value: 'Select Noteables',
    region: '',
    country: 'Nigeria'
}

// handleChange = (e) => {
//   this.setState({
//     [e.target.id]: e.target.value
//   })
// }

// handleSelectChange = (e) => {
//   this.setState({value: e.target.value});
// }

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.createSpending(this.state)
//   this.props.history.push('/');
// }

// handleImageUpload = (e) => {
//   const values = e.target.files;
//   [...values].forEach(file => {
//   this.setState({ imageData: file, imageUrl: URL.createObjectURL(file)})
//   })
// }

// handleVideoUpload = (e) => {
//   const values = e.target.files;
//   [...values].forEach(file => {
//   this.setState({ videoData: file, videoUrl: URL.createObjectURL(file)})
//   })
// }

// selectRegion = (val) => {
//   this.setState({ region: val });
// }

// componentDidMount() {
//   window.$(document).ready(function(){
//     window.$('select').not('.disabled').formSelect();
//     });
// }

render() {
  const { country, region} = this.state
  const { auth } = this.props
  if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Report Public or Private Notables' Spending Ananymously</h5>
            <p className="grey-text text-darken-3"> Select from below or type if not found</p>
            <div className="input-field">
              <select value={this.state.value} onChange={this.handleSelectChange} className="input-field dark-gray">
                <option value="" selected>Select Notables</option>
                <optgroup label="Government">
                  <option value="1">President Muhammadu Buhari</option>
                  <option value="2">Vice President Yemi Oshinbajo</option>
                  <option value="3">Abdullahi Adamu</option>
                  <option value="4">Oby Ezekwesili</option>
                </optgroup>
                <optgroup label="Private Business">
                  <option value="5">Aliko Dangote</option>
                  <option value="6">Femi Otedola</option>
                  <option value="7">Mike Adenuga</option>
                  <option value="8">Folorunso Alakija</option>
                </optgroup>
              </select>
              {/* <label>Notables</label> */}
            </div>
            <p className="red-text">* Note: If Notables not above, Enter their names below:</p>
            <div className="input-field">
              <label htmlFor="notables"> Enter Notables </label>
              <input type="text" id="notables" onChange={this.handleChange} />
            </div>
            <RegionDropdown
            className="input-field"
            country={country}
            value={region}
            defaultOptionLabel= {'Select State'}
            onChange={(val) => this.selectRegion(val)}  />
            <div>
            <label>Select Sector</label>
            <p>
            <label>
              <input name="sector" type="radio" checked />
              <span>Public</span>
            </label>
            </p>
            <p>
            <label>
            <input name="sector" type="radio" />
            <span>Private</span>
            </label>
            </p>
            </div>
            <div className="input-field">
              <label htmlFor="content"> What would you like to say: </label>
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
          <div>
          <NavLink to='/'>
            <button className="btn green lighten-1 z-index-0">View other ananymous reports</button>
          </NavLink>
          </div>
        </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     createSpending: (spending) => dispatch(createSpending(spending))
//   }
// }

// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(CreateSpending)
