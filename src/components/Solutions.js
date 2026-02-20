import { FaDollarSign } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default function Solutions() {
  return (
    <div className="section no-padding" style={{ backgroundColor: "#e5e5e5" }}>
      <div className="container mx-auto px-20 flex items-center justify-between">
        <div className="flex">
          <div className="col-md-4">
            <div
              className="icon-box icon-box-6"
              data-animate="fadeInRight"
              data-animation-delay="2000"
            >
              <div className="box-top transition-all duration-500">
                <FaDollarSign className="icon-circle selectedI p-8" />
                <p className="h3">Savings</p>
                <p></p>
                <p className="text-center">
                  No matter how important change is, it costs both time and
                  money. Businesses need to spend on internal and external
                  resources in order to review, plan, implement, and monitor a
                  change. Therefore, when it comes to business process
                  re-engineering, the cost and the ROI is a key concern for our
                  clients.
                </p>
                <a
                  className="more-btn"
                  href="/our-processes/estimated-cost-savings/"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="icon-box icon-box-6"
              data-animate="fadeInDown"
              data-animation-delay="2000"
            >
              <div className="box-top transition-all duration-500">
                <FaRetweet className="icon-circle selectedI p-8 " />

                <p className="h3">Solutions</p>
                <p></p>
                <p className="text-center">
                  When was the last time someone helped you position your
                  products and services effectively and achieved maximum
                  customer engagement? Is there a powerful brand created around
                  your product? Do you have campaigns that help the visibility
                  of your product? How about your social media optimization?
                </p>
                <a className="more-btn" href="/b2b-solutions/">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="icon-box icon-box-6"
              data-animate="fadeInLeft"
              data-animation-delay="2000"
            >
              <div className="box-top transition-all duration-500">
                <FaStackOverflow className="icon-circle selectedI p-8" />
                <p className="h3">Implementation</p>
                <p></p>
                <p className="text-center">
                  Implementation will depend upon the action(s) that need to be
                  taken. Plans will be re-discussed and achievable goals will be
                  set. Tasks will be assigned to the employees, giving clear
                  objectives, and delivery expectations. Employees will also be
                  provided with a clear overview of the changes that were
                  introduced.
                </p>
                <a className="more-btn" href="/implementation/">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
