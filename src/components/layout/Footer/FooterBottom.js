import Link from "next/link";
import SocialLinks from "../../ui/SocialLinks";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="copyrights copyright_text col-xs-12 col-sm-4">
            <div className="copyright_sitemap col-xs-12">
              <p>
                <Link href="/sitemap">Sitemap</Link>
              </p>
            </div>
            <div className="copyright_text_only col-xs-12 col-sm-12">
              <p>
                © Copyright 2025 Sidago Integrated Solutions – All Rights
                Reserved.
              </p>
            </div>
          </div>

          <div className="copyrights copyright_text col-xs-12 col-sm-4">
            <div className="copyright_address col-xs-12">
              <p>
                <strong>Office:</strong> Sidago USA, Chicago <br />
                <i className="fa fa-location-arrow"></i> Address: 111 West
                Jackson, Suite 34450, Chicago, IL 60604, United States <br />
                <i className="fa fa-envelope"></i> Email:
                contact+chicago@sidago.com
              </p>
            </div>
          </div>

          <div className="social_buttons col-xs-12 col-sm-4">
            <div className="social_icons no-bord">
              <SocialLinks />
            </div>
            <div className="footer_logo col-xs-12">
              <Link href="#">
                <img src="/images/footer_logo1.png" alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
