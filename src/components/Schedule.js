import React from "react"

import data from "../../content/matches.json"
import { getDayMonthDate } from "../utils/DateTimeHelpers"
import { groupBy } from "../utils/helpers"

import s from "./schedule.module.css"
import MatchItem from "./MatchItem"

const Schedule = () => {
  const upcomingMatches =
    data.matches && data.matches.filter(match => match.status === "NOT_STARTED")

  const groupedMatches = Object.values(groupBy(upcomingMatches, "start_time"))

  return (
    <div>
      {groupedMatches &&
        !!groupedMatches.length &&
        groupedMatches.map(matches => {
          const firstMatch = matches && matches[0]
          const date = getDayMonthDate(firstMatch.start_time)

          return (
            <div className={s.dayWrapper}>
              <span>{date}</span>
              {matches && matches.map(match => <MatchItem match={match} />)}
            </div>
          )
        })}
    </div>
  )
}

export default Schedule