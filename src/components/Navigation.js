import React from "react"
import { Link } from "gatsby"

import s from "./navigation.module.css"

const Navigation = ({ results }) => (
  <header className={s.header}>
    <nav className={s.nav}>
      <Link to="/" className={results ? s.scheduleLink : s.scheduleLinkActive}>
        Schedule
      </Link>
      <Link
        to="/results/"
        className={results ? s.resultLinkActive : s.resultLink}
      >
        Results
      </Link>
    </nav>
  </header>
)

export default Navigation
