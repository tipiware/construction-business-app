import PropTypes from "prop-types"
import React from "react"

const ServiceRightText = props => {
  const current = props.current

  const content = {
    content1: (
      <div>
        <h3>House renovation</h3>
        <p>
        We offer comprehensive house renovation services, catering to both small and large-scale projects. Clients can select from a range of tailored packages to suit their individual budgetary requirements. Our team of experienced contractors will meticulously assess the projected costs and furnish you with a detailed quotation. Moreover, we extend our expertise through consultation services for your premises.
        </p>
        <p>Our proficient team boasts extensive experience in renovating balconies, bedrooms, bathrooms, living rooms, and kitchens, ensuring impeccable results in each endeavor.Additionally, we prioritize post-renovation services to guarantee the enduring quality and satisfaction of our workmanship."
        </p>
      </div>
    ),
    content2: (
      <div>
        <h3>Showroom renovation</h3>
        <p>
        We specialize in tailor-made showroom renovations, meticulously designed to cater to the unique needs of our esteemed clients. Our flexible packages are thoughtfully curated to align with diverse budgetary considerations. Upon assessing the project's requirements, our skilled contractors will diligently calculate the estimated costs and furnish you with a comprehensive quotation. As part of our commitment to excellence, we also extend consultation services to optimize the potential of your premises.
        </p>
        <p>
        Our adept team possesses a wealth of experience in renovating product showrooms, with past projects encompassing vehicle and real estate showroom transformations.To guarantee the utmost quality and client satisfaction, we proudly offer post-renovation services, ensuring the longevity and impeccable standards of our workmanship."
        </p>
      </div>
    ),
    content3: (
      <div>
        <h3>Business building renovation</h3>
        <p>
        We specialize in customizing showroom renovations to precisely meet our clients' unique requirements. Our range of carefully crafted packages allows you to select the most appropriate one that aligns with your budgetary considerations. Following a thorough evaluation, our proficient contractors will provide you with a detailed quotation, outlining the estimated costs for your project. Additionally, we offer comprehensive consultation services to optimize the potential of your premises.
        </p>
        <p>
        Our team possesses an extensive track record in the renovation of various business buildings. Past projects include the successful transformation of factory production lines, laboratories, offices, pantries, and safety facilities.To uphold the highest standards of quality and client satisfaction, we proudly extend post-renovation services, ensuring the enduring excellence of our craftsmanship
        </p>
      </div>
    ),
    content4: (
      <div>
        <h3>Factory renovation</h3>
        <p>
        We specialize in customizing factory renovations to precisely meet our clients' unique requirements. Our range of carefully crafted packages allows you to select the most appropriate one that aligns with your budgetary considerations. Following a thorough evaluation, our proficient contractors will provide you with a detailed quotation, outlining the estimated costs for your project. Additionally, we offer comprehensive consultation services to optimize the potential of your premises.
        </p>
        <p>
        Our team possesses an extensive track record in the renovation of various factory premises buildings. Past projects include the successful transformation of factory production lines, laboratories, offices, pantries, and safety facilities.To uphold the highest standards of quality and client satisfaction, we proudly extend post-renovation services, ensuring the enduring excellence of our craftsmanship
        </p>
      </div>
      
    )
  }

  return content[`content${Number(current)}`]
}

export default ServiceRightText
