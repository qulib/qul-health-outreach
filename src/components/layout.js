import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"

const siteTitle = "Site title goes here";
const siteSubtitle = "Subtitle goes here";

export default ({ children }) => (
  <div id="site">
    <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle}/>
    <div id="main">{children}</div>
    <Footer siteTitle={siteTitle}/>
  </div>
)