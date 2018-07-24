import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"

const siteTitle = "My site is cool";
const siteSubtitle = "yep";

export default ({ children }) => (
  <div id="content">
    <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle}/>
    {children}
    <Footer siteTitle={siteTitle}/>
  </div>
)