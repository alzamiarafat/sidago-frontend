export default function Banner() {
  return (
    <div
      className="section md-padding banner_home"
      style={{
        backgroundColor: "#222222",
        backgroundImage: "url(images/banner2.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container mx-auto px-20 flex items-center justify-between">
        <div className="flex">
          <div className="w-full">
            <div className="header_text">
              <div className="wpb_wrapper">
                <p>WE UNDERSTAND THE ONLINE WORLD</p>
              </div>
            </div>
            <div className="wpb_wrapper flex w-full flex-col">
              <div className="statistics w-full flex">
                <div className="statistics_split w-1/4">
                  <div className="first_stat">
                    <a className="tooltips" href="#">
                      75%
                    </a>
                  </div>
                </div>
                <div className="statistics_split w-1/4">
                  <div className="second_stat">
                    <a className="tooltips" href="#">
                      81%
                    </a>
                  </div>
                </div>
                <div className="statistics_split w-1/4">
                  <div className="third_stat">
                    <a className="tooltips" href="#">
                      87%
                    </a>
                  </div>
                </div>
                <div className="statistics_split w-1/4">
                  <div className="fourth_stat">
                    <a className="tooltips" href="#">
                      92%
                    </a>
                  </div>
                </div>
              </div>
              <div className="statistics_title w-full flex">
                <div className="statistics_split_title w-1/4">Cost Savings</div>
                <div className="statistics_split_title w-1/4">
                  Increased Output
                </div>
                <div className="statistics_split_title w-1/4">
                  Return on Investment
                </div>
                <div className="statistics_split_title w-1/4">
                  Client Retention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
