import React from "react"

import s from "./pastMatches.module.css"

const Past = ({ match }) => {
  console.log(match)

  const participantEntityFirst =
    (match && match.participants && match.participants[0]) || {}

  const participantEntitySecond =
    (match && match.participants && match.participants[1]) || {}

  const participantFirst = {
    url: participantEntityFirst.logo || "",
    acronym: participantEntityFirst.name || "",
    score: participantEntityFirst.score || 0,
  }

  const participantSecond = {
    url: participantEntitySecond.logo || "",
    acronym: participantEntitySecond.name || "",
    score: participantEntitySecond.score || 0,
  }

  const participantFirstExist = !!participantEntityFirst.name
  const participantSecondExist = !!participantEntitySecond.name

  const gamesTotal = match.number_of_games || 0

  const firstParticipantWin = +participantFirst.score > +participantSecond.score
  const secondParticipantWin =
    +participantFirst.score < +participantSecond.score

  return (
    <div className={s.matchItem}>
      <div className={s.startTime}>Finished</div>

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

      <span className={s.scores}>
        <span
          className={
            !!participantFirst.score && firstParticipantWin
              ? s.winScore
              : s.loseScore
          }
        >
          {participantFirst.score}
        </span>
        <span className={s.participantScoreSeparator}>:</span>
        <span
          className={
            !!participantSecond.score && secondParticipantWin
              ? s.winScore
              : s.loseScore
          }
        >
          {participantSecond.score}
        </span>
      </span>

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

export default Past
