import React from "react"

import data from "../../content/matches.json"
import { getDayMonthDate } from "../utils/DateTimeHelpers"
import { groupBy } from "../utils/helpers"

import s from "./results.module.css"
import MatchItem from "./MatchItem"

const Results = () => {
  const finishedMatches =
    data.matches && data.matches.filter(match => match.status === "FINISHED")

  const groupedMatches = Object.values(groupBy(finishedMatches, "start_time"))

  const sortedMatchesByDay = groupedMatches.sort((a, b) => {
    return (
      new Date(b[0] && b[0].start_time).getTime() -
      new Date(a[0] && a[0].start_time).getTime()
    )
  })

  return (
    <div className={s.scheduleWrapper}>
      {sortedMatchesByDay &&
        !!sortedMatchesByDay.length &&
        sortedMatchesByDay.map(matches => {
          const firstMatch = matches && matches[0]
          const date = getDayMonthDate(firstMatch.start_time)

          const sortedMatches = matches.sort((a, b) => {
            return (
              new Date(b.start_time).getHours() -
              new Date(a.start_time).getHours()
            )
          })

          return (
            <div className={s.dayWrapper}>
              <p className={s.date}>{date}</p>
              {sortedMatches &&
                sortedMatches.map(match => <MatchItem match={match} />)}
            </div>
          )
        })}
    </div>
  )
}

export default Results
