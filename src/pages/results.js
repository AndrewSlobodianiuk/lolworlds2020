import React from "react"
import { Link } from "gatsby"

import Seo from "../Seo"
import Results from "../components/Results"

const SecondPage = () => (
  <>
    <Seo />
    <Link to="/">Go back to the homepage</Link>
    <Results />
  </>
)

export default SecondPage
