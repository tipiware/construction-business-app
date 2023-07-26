import React from "react"

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleInputChange = e => {}

  return (
    <div id="contact" className="contact">
      <div className="contact__top">
        <h3 className="contact__top_title">
          Feel free to contact us.
        </h3>
      </div>
      <div className="contact__lower">
        <div className="contact__left">
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                className="contact__left_input"
                type="text"
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                className="contact__left_input"
                type="email"
                placeholder="Your email"
              />
            </label>
            <label>
              Phone
              <input
                className="contact__left_input"
                type="phone"
                placeholder="Your phone"
              />
            </label>
            <label>
              Message
              <textarea placeholder="Your message"></textarea>
            </label>
            <label>
              <input
                className="contact__left_submit"
                type="submit"
                value="Submit"
              />
            </label>
          </form>
        </div>
        <div className="contact__right">
          <p className="contact__right_item contact__right_item_top">
            Address
          </p>
          <p className="contact__right_item">Happy Town, Pulau Pinang, Malaysia</p>
          <iframe
              src="https://maps.google.com/maps?width=350&amp;height=400&amp;hl=en&amp;q=Universiti Sains Malaysia, USM Pulau Pinang, Pulau Pinang&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="350"
              height="400"
            />
        </div>
      </div>
    </div>
  )
}

export default Contact
