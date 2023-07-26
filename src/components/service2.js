import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ServiceRight from "./serviceRight"


const Services2 = () => {
  const [showCurrent, setShowCurrent] = useState("1")
  const handleClick = e => {
    e.stopPropagation()
    console.log(e.target.dataset.current)
  }

  return (
    <div id="service2" className="service2">
      <div className="service__container_left">
        <h3 className="service2__title">Our construction services</h3>
        <div className="service2__left">
          <div
            className={`service2__left_item ${
              showCurrent === "1" ? "service2__left_item_active" : ""
            } `}
            data-current="1"
            onClick={() => {
              setShowCurrent("1")
            }}
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="home"
              style={{ color: "blue" }}
            />
            <h4 className="service2__left_item_title">House renovation</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("2")
            }}
            className={`service2__left_item ${
              showCurrent === "2" ? "service2__left_item_active" : ""
            } `}
            data-current="2"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="hotel"
              style={{ color: "blue", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Showroom renovation</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("3")
            }}
            className={`service2__left_item ${
              showCurrent === "3" ? "service2__left_item_active" : ""
            } `}
            data-current="3"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="hotel"
              style={{ color: "blue", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Business building renovation</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("4")
            }}
            className={`service2__left_item ${
              showCurrent === "2" ? "service2__left_item_active" : ""
            } `}
            data-current="2"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="hotel"
              style={{ color: "blue", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Factory renovation</h4>
          </div>
        </div>
      </div>
      <div className="service2__right">
        <ServiceRight current={showCurrent}></ServiceRight>
      </div>
    </div>
  )
}

export default Services2
