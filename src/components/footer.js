import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer id="site-footer">
    <Link to="/">
      <span>{siteTitle}</span>
    </Link>
  </footer>
)

export default Footer