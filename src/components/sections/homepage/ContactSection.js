export default function ContactSection() {
  return (
    <div
      className="section md-padding"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "url(images/worldmap.jpg)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container top-zindex mx-auto px-20 flex items-center justify-between">
        <div className="row">
          <div className="col-md-1">
            <div className="">
              <div className="wpb_wrapper"></div>
            </div>
          </div>

          <div className="col-md-10">
            <div className="wpb_raw_code wpb_content_element wpb_raw_html">
              <div className="wpb_wrapper">
                <p
                  className="block-head center fx animated fadeInUp"
                  data-animate="fadeInUp"
                  data-animation-delay="200"
                  style={{
                    animationDelay: "200ms",
                    fontSize: "36px",
                    lineHeight: "50px",
                  }}
                >
                  <span
                    style={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    LETS WORK TOGETHER
                  </span>
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "18px",
                color: "#a7a5a2",
                lineHeight: "1",
                textAlign: "center",
                fontFamily: "Lato",
                fontWeight: 400,
                fontStyle: "normal",
              }}
              className="vc_custom_heading"
            >
              Please fill out this form for more information today!
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#a7a5a2",
                lineHeight: "1",
                textAlign: "center",
                fontFamily: "Lato",
                fontWeight: 400,
                fontStyle: "normal",
              }}
              className="vc_custom_heading"
            >
              Contact us for all your business solution needs. Please fill out
              form or use the number below and we will get in contact with you
              shortly.
            </p>
            <div
              className="wpcf7 no-js"
              id="wpcf7-f2909-p11-o1"
              lang="en-US"
              dir="ltr"
            >
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form
                action="contact1.php"
                method="post"
                className="wpcf7-form init"
                aria-label="Contact form"
                noValidate="noValidate"
                data-status="init"
              >
                <div style={{ display: "none" }}>
                  <input type="hidden" name="_wpcf7" />
                  <input type="hidden" name="_wpcf7_version" />
                  <input type="hidden" name="_wpcf7_locale" />
                  <input type="hidden" name="_wpcf7_unit_tag" />
                  <input type="hidden" name="_wpcf7_container_post" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" />
                </div>
                <div className="contact_area px-16">
                  <div className="contact_form">
                    <div className="left_form">
                      <div className="flex flex-col">
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="name"
                        >
                          <input
                            size="40"
                            maxLength="400"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required first_name"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="First Name"
                            value=""
                            type="text"
                            name="name"
                          />
                        </span>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="email"
                        >
                          <input
                            size="40"
                            maxLength="400"
                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Email"
                            value=""
                            type="email"
                            name="email"
                          />
                        </span>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="phone"
                        >
                          <input
                            size="40"
                            maxLength="14"
                            className="wpcf7-form-control wpcf7-text phone"
                            aria-invalid="false"
                            placeholder="Phone"
                            value=""
                            type="text"
                            name="phone"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="right_form">
                      <div className="flex flex-col">
                        <span
                          className="wpcf7-form-control-wrap w-2xl"
                          data-name="name"
                        >
                          <input
                            className="wpcf7-form-control wpcf7-validates-as-required last_name"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Last Name"
                            value=""
                            type="text"
                            name="name"
                          />
                        </span>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap w-2xl"
                          data-name="textarea-588"
                        >
                          <textarea
                            // cols="40"
                            // rows="10"
                            // maxLength="2000"
                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required message"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Message"
                            name="textarea-588"
                          ></textarea>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="submit_area">
                    <div className="submit_button">
                      <p>
                        <input
                          className="wpcf7-form-control wpcf7-submit has-spinner submit"
                          type="submit"
                          value="SUBMIT"
                        />
                      </p>
                    </div>
                    <div className="message_note">
                      <p className="note_text">
                        Fill out the contact form above so we can reach out to
                        you and come up with an affordable outsourcing strategy
                        to meet your direct needs. A sales representative will
                        be in contact with you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>
            <div className="vc_empty_space" style={{ height: "32px" }}>
              <span className="vc_empty_space_inner"></span>
            </div>
          </div>

          <div className="col-md-1">
            <div className="">
              <div className="wpb_wrapper"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sec-overlay"
        style={{ backgroundColor: "#ffffff", opacity: 0.9 }}
      ></div>
    </div>
  );
}
