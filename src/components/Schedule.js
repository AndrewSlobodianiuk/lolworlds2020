import React from "react"

import data from "../../content/matches.json"

import MatchItem from "./MatchItem"

const Schedule = () => {
  const upcomingMatches =
    data.matches && data.matches.filter(match => match.status === "NOT_STARTED")

  const groupBy = function (arr, prop) {
    return arr.reduce(function (groups, item) {
      const val = `${new Date(item[prop]).getFullYear()}/${new Date(
        item[prop]
      ).getMonth()}/${new Date(item[prop]).getDate()}`

      console.log(val)

      groups[val] = groups[val] || []
      groups[val].push(item)
      return groups
    }, {})
  }

  console.log(groupBy(upcomingMatches, "start_time"))

  return (
    <div>
      {upcomingMatches &&
        !!upcomingMatches.length &&
        upcomingMatches.map(match => {
          return <MatchItem match={match} />
        })}
    </div>
  )
}

export default Schedule
