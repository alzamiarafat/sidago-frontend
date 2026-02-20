"use client";

import { clients } from "../../data/clients";

export default function ClientsCarousel() {
  return (
    <div className="section sm-padding" style={{ backgroundColor: "#e5e5e5" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <div className="wpb_wrapper"></div>
          </div>

          <div className="col-md-10">
            <div className="wpb_raw_code wpb_content_element wpb_raw_html">
              <div className="wpb_wrapper">
                <p
                  style={{
                    fontSize: "28px",
                    lineHeight: "40px",
                    borderBottom: "1px #DCDCDC solid",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                  className="block-head recent_project_heading fx animated fadeInUp"
                  data-animate="fadeInUp"
                  data-animation-delay="200"
                >
                  Our
                  <span style={{ color: "#000000", fontWeight: 400 }}>
                    {" "}
                    Clients
                  </span>
                </p>
              </div>
            </div>
            <div
              className="clients"
              data-slidesnum="5"
              data-scamount="1"
              data-tspeed="150"
              data-tinfinite="1"
              data-tdots="1"
              data-tauto="1"
            >
              {clients.map((client, index) => (
                <div key={index}>
                  <a
                    className="white-bg"
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      width="167"
                      height="98"
                      src={client.image}
                      className="attachment-large"
                      alt={client.name}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-1">
            <div className="wpb_wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
