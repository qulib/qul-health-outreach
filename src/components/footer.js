import React from "react"
import QULlogo from "../images/qul-logo-long.png";

const Footer = () => (
  <footer id="site-footer">
    <a href="https://library.queensu.ca">
      <img id="qul-logo" src={QULlogo} alt="Queen's University Library"/>
    </a>
    <aside class="site-contact">
      <h3>Contact Us</h3>
      <p>(613) 234-1234</p>
    </aside>
  </footer>
)

export default Footer