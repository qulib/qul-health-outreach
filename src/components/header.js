import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header id="header">
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

export default Header