import { FaLocationArrow } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaRss } from "react-icons/fa";

export default function Foorter() {
  return (
    <footer id="footWrapper">
      <div
        className="section no-padding footer_pricing_row"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container mx-auto px-20 flex">
          <div className="flex items-center justify-between w-full">
            <div className="col-md-8 vc_custom_1434543863389">
              <div className="">
                <div className="wpb_wrapper">
                  <p
                    style={{
                      paddingTop: "13px",
                      fontSize: "22px",
                      lineHeight: "30px",
                    }}
                  >
                    <span className="highlight">LOOKING</span> to take your
                    business to the next level?
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 footer_pricing_row_right_column pl-20"
              style={{ float: "right" }}
            >
              <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                <div className="wpb_wrapper">
                  <a
                    className="btn btn-large main-bg"
                    href="/sales/"
                    style={{ float: "right" }}
                  >
                    GET PRICING NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container mx-auto px-20 flex flex-col items-center justify-between">
          <div className="flex w-full justify-between">
            <div className="copyrights copyright_text col-xs-12 col-sm-4">
              <div className="copyright_sitemap col-xs-12">
                <p>
                  <a href="/sitemap">Sitemap</a>
                </p>
              </div>
              <div className="copyright_text_only col-xs-12 col-sm-12">
                <p>
                  © Copyright 2026 Sidago Integrated Solutions – All Rights{" "}
                  <br></br>
                  Reserved.
                </p>
              </div>
            </div>

            <div className="copyrights copyright_text col-xs-12 col-sm-4">
              <div className="copyright_address col-xs-12">
                <div className="flex flex-col items-start gap-2">
                  <p className="!mb-0">
                    <strong>Office:</strong> Sidago USA, Chicago
                  </p>

                  <div className="flex items-center gap-2">
                    <FaLocationArrow className="shrink-0" />
                    <span>
                      Address: 111 West Jackson, Suite 34450, Chicago, IL 60604,
                      United States
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaEnvelope className="shrink-0" />
                    <span>Email: contact+chicago@sidago.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="social_buttons col-xs-12 col-sm-4">
              <div className="social_icons no-bord">
                <ul className="flex justify-end items-center gap-1 flex-row">
                  <li className="group p-2 hover:bg-[#e7512f]">
                    <a
                      className="!text-[#b5b5b5] group-hover:!text-white"
                      href="https://www.facebook.com/sidagooutsourcing"
                      data-title="facebook"
                      data-tooltip="true"
                      target="_blank"
                    >
                      <FaFacebookF size={16} />
                    </a>
                  </li>
                  <li className="group p-2 hover:bg-[#e7512f]">
                    <a
                      className="!text-[#b5b5b5] group-hover:!text-white"
                      href="https://twitter.com/sidagobpo"
                      data-title="twitter"
                      data-tooltip="true"
                      target="_blank"
                    >
                      <FaTwitter size={16} />
                    </a>
                  </li>
                  <li className="group p-2 hover:bg-[#e7512f]">
                    <a
                      className="!text-[#b5b5b5] group-hover:!text-white"
                      href="https://www.linkedin.com/company/sidago-integrated-solutions"
                      data-title="linkedin"
                      data-tooltip="true"
                      target="_blank"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  </li>
                  <li className="group p-2 hover:bg-[#e7512f]">
                    <a
                      className="!text-[#b5b5b5] group-hover:!text-white"
                      href="https://plus.google.com/u/0/116536599190449967608/"
                      data-title="google-plus"
                      data-tooltip="true"
                      target="_blank"
                    >
                      <TiSocialGooglePlus size={24} />
                    </a>
                  </li>
                  <li className="group p-2 hover:bg-[#e7512f]">
                    <a
                      className="!text-[#b5b5b5] group-hover:!text-white"
                      href="/blog/"
                      data-title="rss"
                      data-tooltip="true"
                      target="_blank"
                    >
                      <FaRss size={18} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer_logo col-xs-12 pr-2">
                <a href="#">
                  <img src="images/footer_logo1.png" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
