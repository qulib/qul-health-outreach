import React from "react"
import Header from "./header"
import "../styles/style.scss"

export default ({ children, siteTitle, siteSubtitle }) => (
  <div id="content">
    <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle}/>
    {children}
  </div>
)