export default function HeroBanner() {
  return (
    <div
      className="section lg-padding"
      style={{
        background: "url(images/block-bg-2.jpg)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container top-zindex mx-auto px-20 flex items-center justify-between">
        <div className="w-full">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="wpb_column vc_column_container vc_col-sm-2">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper"></div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-2">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper"></div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-4">
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper ">
                      <div className="wpb_single_image wpb_content_element vc_custom_1452862065348 w-[360] bg-white py-[57] pr-[10] vc_align_center flex items-center justify-center">
                        <div className="wpb_wrapper">
                          <div className="vc_single_image-wrapper">
                            <img
                              decoding="async"
                              width="184"
                              height="59"
                              src="images/logo1.png"
                              className="vc_single_image-img attachment-full"
                              alt="logo1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-2">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper"></div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-2">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sec-overlay"
        style={{ backgroundColor: "#e7512f", opacity: 0.75 }}
      ></div>
    </div>
  );
}
