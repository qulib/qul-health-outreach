import React from "react"

import Header from "./header"
import "../styles/style.scss"

export default ({ children }) => (
  <div id="content">
    <Header siteTitle="My site is cool" siteSubtitle="yep"/>
    {children}
  </div>
)