import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import Overlay from "../components/overlay"
import Img from "gatsby-image"

const Gallery = () => {
  const [showProject, setShowProject] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "brickwork.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "roofingwork.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "plumbingwork.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleOnClick = e => {
    setCurrentProject(Number(e.currentTarget.dataset.current))
    setShowProject(true)

    console.log(e.currentTarget.dataset.current)
  }

  const closeOverlay = () => {
    console.log("happened")
    setCurrentProject(0)
    setShowProject(false)
  }

  return (
    <div id="gallery" className="gallery">
      {showProject ? (
        <Overlay display={closeOverlay} current={currentProject}></Overlay>
      ) : (
        ""
      )}

      <h3 className="gallery__title">Renovation solution</h3>
      <div className="gallery__cases">
        <div className="gallery__case" onClick={handleOnClick} data-current="1">
          <BackgroundImage
            Tag="div"
            className="gallery__background_img_1 gallery__background_img"
            fluid={data.img1.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Brick work</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick} data-current="2">
          <BackgroundImage
            Tag="div"
            className="gallery__background_img_2 gallery__background_img"
            fluid={data.img2.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Roofing work</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick} data-current="1">
          <BackgroundImage
            Tag="div"
            className="gallery__background_img_3 gallery__background_img"
            fluid={data.img3.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Plumbing Works</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
