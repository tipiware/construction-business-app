import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services3 = () => {


  return (
    <div className="services">
      <h3 className="service2__title">Why choose us?</h3>
      <div className="service__container">
        <div className="service__item">
          <h3 className="service__item_title">Resonable price</h3>
          <div className="service__item_lower-container">
            <FontAwesomeIcon
              icon="home"
              size="5x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <p className="service__item_para">
            Always get your project done with outstanding quality and unbeatable results, all at a remarkably low and affordable price.
            </p>
          </div>
        </div>
        <div className="service__item">
          <h3 className="service__item_title">On-time delivery</h3>
          <div className="service__item_lower-container">
            <FontAwesomeIcon
              icon="coffee"
              size="5x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <p className="service__item_para">
            Accelerate your dream project's completion with our expert team, ensuring swift construction without compromising on quality or safety.
            </p>
          </div>
        </div>
        <div className="service__item">
          <h3 className="service__item_title">Quality work</h3>
          <div className="service__item_lower-container">
            <FontAwesomeIcon
              icon="hotel"
              size="5x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <p className="service__item_para">
            Experience excellence in every aspect of your construction project with our skilled team delivering top-notch quality and precision
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services3
