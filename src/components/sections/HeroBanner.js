import { statistics } from "@/src/data/statistics";

export default function HeroBanner() {
  return (
    <div
      className="section md-padding banner_home"
      style={{
        backgroundColor: "#222222",
        background: "url(/images/banner2.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header_text">
              <div className="wpb_wrapper">
                <p>WE UNDERSTAND THE ONLINE WORLD</p>
              </div>
            </div>
            <div>
              <div className="wpb_wrapper">
                <div className="statistics col-xs-12 col-sm-12 col-md-12">
                  {statistics.map((stat, index) => (
                    <div
                      key={index}
                      className="statistics_split col-xs-3 col-sm-3 col-md-3"
                    >
                      <div
                        className={`${stat.widthClass} h-full float-left relative bg-[#e7512f] border-2 border-[#e7512f]`}
                        style={{ margin: 0, padding: 0 }}
                      >
                        {/* <a
                          className="tooltips"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          {stat.percentage}%
                        </a> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="statistics_title col-xs-12 col-sm-12 col-md-12">
                  {statistics.map((stat, index) => (
                    <div
                      key={index}
                      className="statistics_split_title col-xs-3 col-sm-3 col-md-3"
                    >
                      {stat.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
