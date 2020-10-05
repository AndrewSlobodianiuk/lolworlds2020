import React from "react"

import { getFullTime } from "../utils/DateTimeHelpers"

import s from "./upcomingmatches.module.css"

const Upcoming = ({ match }) => {
  const participantEntityFirst =
    (match &&
      match.participants &&
      match.participants[0] &&
      match.participants[0]) ||
    {}
  const participantEntitySecond =
    (match &&
      match.participants &&
      match.participants[1] &&
      match.participants[1]) ||
    {}

  const participantFirst = {
    url: participantEntityFirst.logo || "",
    acronym: participantEntityFirst.name || "",
  }

  const participantSecond = {
    url: participantEntitySecond.logo || "",
    acronym: participantEntitySecond.name || "",
  }

  const participantFirstExist = !!participantEntityFirst.name
  const participantSecondExist = !!participantEntitySecond.name

  const gamesTotal = match.number_of_games || 0
  const startTime = getFullTime(match.start_time || "")

  return (
    <div className={s.matchItem}>
      <div className={s.startTime}>{startTime}</div>

      {participantFirstExist ? (
        <>
          <span className={s.participantLogoHolderFirst}>
            <img
              src={participantFirst.url}
              alt={participantFirst.acronym}
              height={40}
            />
          </span>

          <span className={s.participant}>{participantFirst.acronym}</span>
        </>
      ) : (
        <>
          <span />
          <div>TBD</div>
        </>
      )}

      <span>VS</span>

      {participantSecondExist ? (
        <>
          <span className={s.participant}>{participantSecond.acronym}</span>

          <span className={s.participantLogoHolderSecond}>
            <img
              src={participantSecond.url}
              alt={participantSecond.acronym}
              height={40}
            />
          </span>
        </>
      ) : (
        <>
          <div>TBD</div>
          <span />
        </>
      )}

      <div>{`BO ${gamesTotal}`}</div>
    </div>
  )
}

export default Upcoming
