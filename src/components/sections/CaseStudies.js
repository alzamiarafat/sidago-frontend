import Button from "../ui/Button";
import PortfolioItem from "../ui/PortfolioItem";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudies() {
  return (
    <div className="section sm-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="wpb_column vc_column_container vc_col-sm-3">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <p
                            className="block-head recent_project_heading fx animated fadeInUp"
                            data-animate="fadeInUp"
                            data-animation-delay="200"
                            style={{
                              WebkitAnimationDelay: "200ms",
                              fontSize: "28px",
                              lineHeight: "40px",
                            }}
                          >
                            CASE
                            <span
                              style={{
                                textTransform: "uppercase",
                                color: "#000000",
                                fontWeight: 400,
                              }}
                            >
                              {" "}
                              STUDIES
                            </span>
                          </p>
                        </div>
                      </div>

                      <div
                        className="fx"
                        data-animate="fadeInUp"
                        data-animation-delay="200"
                      >
                        <div
                          className="wpb_wrapper"
                          style={{ color: "#000000" }}
                        >
                          <p style={{ textAlign: "justify" }}>
                            Our team of experienced analysts, researchers, and
                            writers can provide you with the solutions your
                            business needs. Here are some example projects of
                            how we have helped:
                          </p>
                        </div>
                      </div>
                      <div
                        className="vc_empty_space"
                        style={{ height: "20px" }}
                      >
                        <span className="vc_empty_space_inner"></span>
                      </div>

                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <Button
                            href="/gallery/"
                            variant="rounded"
                            size="lg"
                            icon="fa-chain"
                            className="fx animated fadeInUp"
                            data-animate="fadeInUp"
                            data-animation-delay="200"
                            style={{ animationDelay: "200ms" }}
                          >
                            BROWSE ALL CASE STUDIES
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-9">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <article
                        className="myportfolio-container minimal-light"
                        id="home_grid"
                      >
                        <div
                          id="esg-grid-5-1"
                          className="esg-grid"
                          style={{
                            backgroundColor: "transparent",
                            padding: "10px",
                            boxSizing: "border-box",
                          }}
                        >
                          <div className="esg-clear-no-height"></div>
                          <ul>
                            {caseStudies.map((study, index) => (
                              <PortfolioItem
                                key={index}
                                title={study.title}
                                image={study.image}
                                link={study.link}
                              />
                            ))}
                          </ul>
                        </div>
                      </article>
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
