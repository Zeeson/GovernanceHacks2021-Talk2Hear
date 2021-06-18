import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className="card z-index-0">
              <div className="card-content">
                <span className="card-title"> Project Title - {id} </span>
                <p>This is tractiveEngine project aim at improving agriculture value chain </p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>  Posted by the Zeeson  </div>
                <div> 12th August, 12pm </div>
              </div>
            </div>
        </div>
    )
}

export default ProjectDetails
