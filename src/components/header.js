import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, siteSubtitle }) => (
  <header id="header">
    <Link to="/">
      <span className="site-title">{siteTitle}</span>
      <span className="site-subtitle">{siteSubtitle}</span>
    </Link>
  </header>
)

export default Header