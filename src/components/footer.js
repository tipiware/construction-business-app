import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  fab,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item footer__text">
        <p>
        Renovation app provide renovation services for residential and commercial industrial. With more than 10 years of working experience in the building industry, we have completed more than 500 projects of renovation and building projects among residential and commercial projects in Malaysia.
        </p>
      </div>
      <div className="footer__item footer__copyright">
        <p>Copyright is all rights reserved. Creative Commons is some rights reserved.</p>
      </div>
      <div className="footer__item footer__social">
        <FontAwesomeIcon
          className="footer__social_icon"
          icon={faInstagram}
          style={{ color: "#000000", marginTop: "15px", cursor: "pointer" }}
          size={"2x"}
        />
        <FontAwesomeIcon
          className="footer__social_icon"
          icon={faFacebook}
          style={{
            color: "#000000",
            marginTop: "15px",
            marginLeft: "15px",
            cursor: "pointer",
          }}
          size={"2x"}
        />
      </div>
    </div>
  )
}

export default Footer
