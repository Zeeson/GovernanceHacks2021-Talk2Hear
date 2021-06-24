import React from 'react'
import SpendingSummary from './SpendingSummary'
import { Link } from 'react-router-dom'

// projects props from the dashboard
const SpendingList = ({spendings}) => {
  return(
    <div className="project-list section">
      {spendings && spendings.map(spending => {
        return(
          <Link to={'/spending/' + spending.id} key={spending.id}>
            <SpendingSummary spending={spending} />
        </Link>
        )
      })}
    </div>
  )
}

export default SpendingList
