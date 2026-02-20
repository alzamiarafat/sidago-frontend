import Link from "next/link";

export default function PricingBar() {
  return (
    <div
      className="section no-padding footer_pricing_row"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 vc_custom_1434543863389">
            <div className="wpb_wrapper">
              <p
                style={{
                  paddingTop: "13px",
                  fontSize: "22px",
                  lineHeight: "30px",
                }}
              >
                <span className="highlight">LOOKING</span> to take your business
                to the next level?
              </p>
            </div>
          </div>
          <div
            className="col-md-3 footer_pricing_row_right_column"
            style={{ float: "right" }}
          >
            <div className="wpb_wrapper">
              <Link
                className="btn btn-large main-bg"
                href="/sales/"
                style={{ float: "right" }}
              >
                GET PRICING NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
