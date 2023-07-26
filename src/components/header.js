import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileNav from "./mobileNav"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div id="header" className="header">
      <div className="header__logo">
        <h1 className="Logo" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span
              style={{
                color: "#666666",
              }}
            >
              Renovation Firm
            </span>
          </Link>
        </h1>
      </div>
      <div className="header__nav">
        <Link to="#service2" className="header__nav_item">
          Service
        </Link>
        <Link to="#company" className="header__nav_item">
          Company
        </Link>
        <Link to="#gallery" className="header__nav_item">
          Gallery
        </Link>
        <Link to="#contact" className="header__nav_item">
          Contact
        </Link>
      </div>
      <MobileNav></MobileNav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
