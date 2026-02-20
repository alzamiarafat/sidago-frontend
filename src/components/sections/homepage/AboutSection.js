export default function AboutSection() {
  return (
    <div
      className="section sm-padding gry-bg"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container mx-auto px-20 flex items-center justify-between">
        <div className="row">
          <div className="flex flex-col items-center justify-center">
            <div
              className="wpb_single_image wpb_content_element home_cursor_image vc_align_center"
              data-animate="fadeInDown"
              data-animation-delay="300"
            >
              <div className="wpb_wrapper">
                <div className="vc_single_image-wrapper">
                  <img
                    decoding="async"
                    width="94"
                    height="94"
                    src="/images/button.png"
                    className="vc_single_image-img attachment-full"
                    alt="Click"
                  />
                </div>
              </div>
            </div>
            <div className="vc_empty_space" style={{ height: "40px" }}>
              <span className="vc_empty_space_inner"></span>
            </div>

            <div className="wpb_raw_code wpb_content_element wpb_raw_html">
              <div className="wpb_wrapper">
                <p
                  className="block-head center sidago-homepage-title-fix fx animated fadeInUp"
                  data-animate="fadeInUp"
                  data-animation-delay="200"
                  style={{
                    animationDelay: "200ms",
                    lineHeight: "50px",
                  }}
                >
                  <span>Sidago Integrated Solutions</span>
                </p>
              </div>
            </div>

            <div className="" data-animate="fadeInUp">
              <div className="wpb_wrapper">
                <p className="text-center">
                  We work hand in hand with our customers to make their business
                  better. Together, we find your true potential and seek out the
                  business you deserve. You have other things to worry about;
                  let us take over all of your outsourcing needs to give you
                  reasonable rates on proven results you can count on. We are a
                  full service outsourcing company providing managed solutions,
                  staff augmentation, and overhead reduction options.
                </p>
              </div>
            </div>
            <a
              id="it_1NUFt0aTbm"
              className="btn btn-xl btn-3d vc_button-2-align-center bg-[#e7512f] !text-white shadow-[0_6px_0_#d23c1a] hover:bg-[#da4422]"
            >
              <span>LEARN MORE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
