"use client";

import { useState, useCallback } from "react";
import { FiLink } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    image: "/images/Data-Mining2.png",
    alt: "Data-Mining2",
    title: "Data Mining",
    href: "/wp-content/uploads/2016/01/Data-Mining-1.pdf",
  },
  {
    id: 2,
    image: "/images/Public-Relations2.jpg",
    alt: "Public-Relations2",
    title: "Public Relations",
    href: "/wp-content/uploads/2016/01/Public-Relations-1.pdf",
  },
  {
    id: 3,
    image: "/images/Paralegal-and-Bookkeeping2.jpg",
    alt: "Print",
    title: "Paralegal And Bookkeeping",
    href: "/wp-content/uploads/2016/01/Paralegal-and-Bookkeeping-1.pdf",
  },
  {
    id: 4,
    image: "/images/Telemarketing2.jpg",
    alt: "Telemarketing2",
    title: "Telemarketing",
    href: "/wp-content/uploads/2015/11/Telemarketing1.png",
  },
  {
    id: 5,
    image: "/images/Web-Content3-1.png",
    alt: "Web-Content3",
    title: "Web Content",
    href: "#",
  },
  {
    id: 6,
    image: "/images/Market-Research2.jpg",
    alt: "Market-Research2",
    title: "Market Research",
    href: "/wp-content/uploads/2016/01/Market-Research.pdf",
  },
  {
    id: 7,
    image: "/images/General-Offshoring2.jpg",
    alt: "General-Offshoring2",
    title: "General Offshoring",
    href: "/wp-content/uploads/2016/01/General-Offshoring1.pdf",
  },
  {
    id: 8,
    image: "/images/Expert-Negotiation2.png",
    alt: "Expert-Negotiation2",
    title: "Expert Negotiation",
    href: "/wp-content/uploads/2016/01/Expert-Negotiation-1.pdf",
  },
  {
    id: 9,
    image: "/images/Administrative-Assistants2-1.jpg",
    alt: "Administrative-Assistants2",
    title: "Administrative Assistants",
    href: "/wp-content/uploads/2016/01/Administrative-Assistants-1.pdf",
  },
  {
    id: 10,
    image: "/images/Web-Research1.jpg",
    alt: "Web-Research1",
    title: "Web Research",
    href: "/wp-content/uploads/2016/01/Web-Research.pdf",
  },
  {
    id: 11,
    image: "/images/Web-Development2.png",
    alt: "Web-Development2",
    title: "Web Development",
    href: "/wp-content/uploads/2016/01/Web-Development-1.pdf",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(portfolioItems.length / ITEMS_PER_PAGE);

  const currentItems = portfolioItems.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const handleLeftClick = useCallback(() => {
    setCurrentPage((prevPage) =>
      prevPage - 1 < 0 ? totalPages - 1 : prevPage - 1,
    );
  }, [totalPages]);

  const handleRightClick = useCallback(() => {
    setCurrentPage((prevPage) =>
      prevPage + 1 >= totalPages ? 0 : prevPage + 1,
    );
  }, [totalPages]);

  return (
    <div className="section sm-padding">
      <div className="container mx-auto px-20 flex items-center justify-between">
        <div className="w-full">
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
                              STUDIES
                            </span>
                          </p>
                        </div>
                      </div>

                      <div
                        className=""
                        data-animate="fadeInUp"
                        data-animation-delay="200"
                      >
                        <div
                          className="wpb_wrapper"
                          style={{ color: "#000000" }}
                        >
                          <p>
                            Our team of experienced analysts, researchers, and
                            writers can provide you with the solutions your
                            business needs. Here are some example projects of
                            how we have helped:
                          </p>
                        </div>
                      </div>
                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <a
                            href="/gallery/"
                            className="inline-flex items-center gap-2 p-4 text-md font-semibold !text-white bg-[#e7512f] rounded-md hover:bg-[#da4422] whitespace-nowrap transition-all duration-200"
                          >
                            <FiLink className="text-lg shrink-0" />
                            <span>BROWSE ALL CASE STUDIES</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <article className="w-full" id="home_grid">
                    <div className="bg-transparent p-[10px] box-border">
                      {/* Navigation Arrows */}
                      <div className="flex items-center justify-end gap-3 mb-4">
                        {/* Left Button */}
                        <button
                          onClick={handleLeftClick}
                          aria-label="Previous Page"
                          className="w-8 h-8 flex items-center justify-center 
                    bg-gray-500 text-white hover:bg-[#e7512f] hover:text-white 
                    rounded-md transition-all duration-200 cursor-pointer"
                        >
                          <FaAngleLeft />
                        </button>

                        {/* Page Indicator */}
                        {/* <span className="text-sm text-gray-500">
                          {currentPage + 1} / {totalPages}
                        </span> */}

                        {/* Right Button */}
                        <button
                          onClick={handleRightClick}
                          aria-label="Next Page"
                          className="w-8 h-8 flex items-center justify-center 
                    bg-gray-500 text-white hover:bg-[#e7512f] hover:text-white 
                    rounded-md transition-all duration-200 cursor-pointer"
                        >
                          <FaAngleRight />
                        </button>
                      </div>

                      {/* Grid Items */}
                      <ul className="flex gap-4">
                        {currentItems.map((item) => (
                          <li
                            key={item.id}
                            className="relative w-1/3 group overflow-hidden cursor-pointer"
                          >
                            {/* Fixed Height Image Container */}
                            <div className="relative h-[200px] w-full overflow-hidden">
                              {/* Image with zoom effect */}
                              <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform 
                          duration-500 group-hover:scale-110"
                              />

                              {/* Dark Overlay on Hover */}
                              <div
                                className="absolute inset-0 bg-black/0 
                          group-hover:bg-black/60 transition-all duration-300 z-10"
                              />

                              {/* Link Icon - Center (visible on hover) */}
                              <div
                                className="absolute inset-0 z-20 flex items-center 
                          justify-center opacity-0 group-hover:opacity-100 
                          translate-y-4 group-hover:translate-y-0 
                          transition-all duration-300 delay-100"
                              >
                                <Link
                                  href={item.href}
                                  target="_blank"
                                  className="w-10 h-10 flex items-center justify-center 
                            bg-white/50 hover:bg-[#e7512f] rounded-full 
                            hover:!text-white transition-colors duration-200"
                                  aria-label={`View ${item.title}`}
                                >
                                  <FiLink size={18} />
                                </Link>
                              </div>

                              {/* Title - Bottom (visible on hover) */}
                              <div
                                className="absolute bottom-0 left-0 right-0 z-20 
                          bg-black/70 text-white text-center py-2 px-3 
                          text-sm font-medium translate-y-full 
                          group-hover:translate-y-0 
                          transition-transform duration-300"
                              >
                                {item.title}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
