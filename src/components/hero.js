import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Hero = () => {
  const [virtualTour, setVirtualTour] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [randomText, setRandomText] = useState(
    "Sample load"
  )
  const [currentTourId, setCurrentTourId] = useState(1)
  const [currentTourUrl, setCurrentTourUrl] = useState(
    "https://res.cloudinary.com/dypkha59w/image/upload/v1669734036/ijugq7laijmresx8z8ni.jpg"
  )
  const [currentTourDesc, setCurrentTourDesc] = useState(
    "Renovation work"
  )

  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "renovation.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleTourDisplay = (current, direction) => {
    const tourArr = [
      {
        id: 1,
        desc: "House",
        url:
          "https://res.cloudinary.com/dypkha59w/image/upload/v1669734036/mg18nwii9v3oaaghzs8w.jpg",
        title: "Renovation for housing unit",
      },

      {
        id: 2,
        desc: "Showroom",
        url:
          "https://res.cloudinary.com/dypkha59w/image/upload/v1669734036/ijugq7laijmresx8z8ni.jpg",
        title: "Renovation for showroom",
      },
      {
        id: 3,
        desc: "Business Building",
        url:
          "https://res.cloudinary.com/dypkha59w/image/upload/v1669734035/ppslos6muszdfchgst3k.jpg",
        title: "Renovation for business building",
      },
    ]

    let newCurrentNum
    if (direction === "left") {
      if (current === 1) {
        newCurrentNum = tourArr.length
      } else {
        newCurrentNum = current - 1
      }
    } else {
      if (current === tourArr.length) {
        newCurrentNum = 1
      } else {
        newCurrentNum = current + 1
      }
    }
    setShowTitle(false)
    setTimeout(() => {
      setShowTitle(true)
    }, 7000)
    setCurrentTourId(newCurrentNum)
    setRandomText(tourArr[newCurrentNum - 1].title)
    setCurrentTourDesc(tourArr[newCurrentNum - 1].desc)
    setCurrentTourUrl(tourArr[newCurrentNum - 1].url)
  }

  const imageData = data.hero.childImageSharp.fluid
  return (
    <div id="hero" className="hero">
      {!virtualTour ? (
        <BackgroundImage
          Tag="div"
          className="hero__background_img"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="hero__init">
            <div className="hero__title_container_init">
              <h2 className="hero__title_text_init">
                Renovation for house, showroom, factory and business building
              </h2>
              <div className="hero__cta">
                <button
                  className="hero__cta_btn"
                  onClick={e => {
                    setVirtualTour(true)
                  }}
                >
                  Our Work
                </button>
              </div>
            </div>
          </div>
        </BackgroundImage>
      ) : (
        <div className="hero-frame__container">
          <div
            onClick={() => {
              setShowTitle(false)
            }}
            className="hero__title_container"
          >
            {showTitle ? (
              <h2 className="hero__title_text">{randomText}</h2>
            ) : (
              ""
            )}
          </div>
          <div className="hero-frame_top">
            <iframe
              onLoad={() => {
                setTimeout(() => {
                  setShowTitle(true)
                }, 7000)
              }}
              className="hero-frame"
              src={`${currentTourUrl}`}
              style={{ position: "absolute",marginLeft: "15%",marginRight: "10%", align: "center", width: "100%",height: "80%", border: "none" }}
            ></iframe>
          </div>

          <div className="hero-frame__arrows">
            <h5 className="hero-frame__title">{`${currentTourDesc}`}</h5>
            <div className="hero__icon_container">
              <FontAwesomeIcon
                onClick={() => {
                  handleTourDisplay(currentTourId, "left")
                }}
                icon="arrow-left"
                size="2x"
                className="hero-frame__arrows_icon"
              />
              <FontAwesomeIcon
                onClick={() => {
                  handleTourDisplay(currentTourId, "right")
                }}
                icon="arrow-right"
                size="2x"
                className="hero-frame__arrows_icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  logo: ``,
}

export default Hero
