import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Company = () => {
  const data = useStaticQuery(graphql`
    query {
      company: file(relativePath: { eq: "renovation-process-01.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      company2: file(relativePath: { eq: "renovation-process-02.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      company3: file(relativePath: { eq: "renovation-process-03.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="company" className="company">
      <h3 className="company__title">Design & build workflow</h3>
      <div className="company__container">
        <div className="company__left1">
          <h3 className="company__left_title">Phase 1-Meet & Consultation</h3>
          <p className="company__left_para">
          Typically, we provide a non-obligatory site survey to assess and understand our clients’ requirements. During the survey, we will assess the existing condition of the unit and offer our clients practical advice on planning the renovation.
          </p>
        </div>
        <div className="company__right1">
          <Img
            fluid={data.company.childImageSharp.fluid}
            style={{ margin: "1rem" }}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </div>
        
      </div>
      <div className="company__container">
      <div className="company__left2">
          <Img
            fluid={data.company2.childImageSharp.fluid}
            style={{ margin: "1rem" }}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </div>
        <div className="company__right2">
          <h3 className="company__left_title">Phase 2-Quotation & Cost Estimation</h3>
          <p className="company__left_para">
          Following which, we will be able to provide a cost quotation encompassing the range of works required, while taking into account the specific budget and time constraints of each project.
          </p>
        </div>
      </div>
      <div className="company__container">
        <div className="company__left1">
          <h3 className="company__left_title">Phase 3-Design, Plan & Construct</h3>
          <p className="company__left_para">
          Upon finalization discussion and order confirmed, you can sit back and relax. We'll built a beautiful home or office and great relationships along the way.
          </p>
        </div>
        <div className="company__right1">
          <Img
            fluid={data.company3.childImageSharp.fluid}
            style={{ margin: "1rem" }}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </div>   
      </div>
    </div>
  )
}

export default Company
