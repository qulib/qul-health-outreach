import React from "react"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"

const siteTitle = "Health Outreach Partners"
const siteSubtitle = "A Partnership with Bracken Health Sciences Library"

export default ({ children }) => (
  <div id="site">
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
    </Helmet>
    <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle} />
    <div id="main">{children}</div>
    <Footer siteTitle={siteTitle} />
  </div>
)
