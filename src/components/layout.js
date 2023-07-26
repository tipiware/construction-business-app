/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import {
  faHome,
  faCoffee,
  faHotel,
  faArrowRight,
  faArrowLeft,
  faTimesCircle,
  faSchool,
  faCar,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import "./mediaQ.css"

library.add(
  faFacebook,
  faHome,
  faCoffee,
  faHotel,
  faInstagram,
  faArrowLeft,
  faArrowRight,
  faTimesCircle,
  faSchool,
  faCar,
  faUser
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main> {children}</main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
