import React from "react"

import UpcomingMatch from "./UpcomingMatch"
import RunningMatch from "./RunningMatch"
import PastMatch from "./PastMatch"

const MatchItem = ({ match }) => {
  const matchType = match.status

  switch (matchType) {
    case "INPLAY":
      return <RunningMatch match={match} />

    case "FINISHED":
      return <PastMatch match={match} />

    case "NOT_STARTED":
      return <UpcomingMatch match={match} />

    default:
      return <div>No data</div>
  }
}

export default MatchItem
