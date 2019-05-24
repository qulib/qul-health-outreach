import React from 'react'
import Helmet from 'react-helmet'

import ErrorBoundary from './ErrorBoundary.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import '../styles/style.scss'

const siteTitle = 'Health Outreach Partners'
const siteSubtitle = 'A Partnership with Bracken Health Sciences Library'

export default ({ children }) => (
  <div id="site">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
    </Helmet>
    <ErrorBoundary>
      <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle} />
    </ErrorBoundary>

    <div id="main">{children}</div>
    <ErrorBoundary>
      <Footer siteTitle={siteTitle} />
    </ErrorBoundary>
  </div>
)
