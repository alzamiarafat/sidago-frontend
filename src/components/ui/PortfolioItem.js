import Image from "next/image";

export default function PortfolioItem({ title, image, link }) {
  return (
    <li className="filterall eg-roosevelt-wrapper">
      <div className="esg-media-cover-wrapper">
        <div className="esg-entry-media esg-shifttotop" data-delay="0">
          <img decoding="async" src={image} alt={title} />
        </div>
        <div className="esg-entry-cover">
          <div
            className="esg-overlay esg-fade eg-roosevelt-container"
            data-delay="0"
          ></div>
          <div
            className="esg-bottom eg-roosevelt-element-0 esg-flipup"
            data-delay="0.09"
          >
            {title}
          </div>
          <div
            className="esg-center eg-roosevelt-element-1-a esg-slideup"
            data-delay="0.3"
          >
            <a
              className="eg-roosevelt-element-1"
              href={link || "javascript:void(0)"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="eg-icon-link"></i>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
