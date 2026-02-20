import SocialLinks from "../../ui/SocialLinks";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="left">
          <ul>
            <li>
              <a href="mailto:CONTACT@SIDAGO.COM">
                <i className="fa fa-envelope"></i>CONTACT@SIDAGO.COM
              </a>
            </li>
          </ul>
        </div>
        <div className="right-bar right">
          <div className="right">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
