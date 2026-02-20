"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    id: 1,
    image: "/images/our-client1.jpg",
    alt: "our-client1",
    href: "http://www.thehcigroup.com/",
  },
  {
    id: 2,
    image: "/images/our-client2.jpg",
    alt: "our-client2",
    href: "http://rammodular.com/",
  },
  {
    id: 3,
    image: "/images/our-client4.jpg",
    alt: "our-client4",
    href: "http://providerpower.com/",
  },
  {
    id: 4,
    image: "/images/our-client5.jpg",
    alt: "our-client5",
    href: "http://www.prescientedge.com/",
  },
  {
    id: 5,
    image: "/images/our-client6.jpg",
    alt: "our-client6",
    href: "http://goenergies.com/",
  },
  {
    id: 6,
    image: "/images/our-client11.jpg",
    alt: "our-client11",
    href: "http://acacia-inc.com/",
  },
  {
    id: 7,
    image: "/images/daiichi-sanko.png",
    alt: "our-client13",
    href: "https://www.daiichisankyo.com/",
  },
];

const ITEMS_TO_SHOW = 5;
const AUTO_PLAY_SPEED = 2000;
const TRANSITION_SPEED = 500;

export default function ClientsCarousel() {
  // Triple clone for infinite effect
  const clonedClients = [...clients, ...clients, ...clients];

  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const isTransitioningRef = useRef(false);

  // Start from middle clone set
  const [currentIndex, setCurrentIndex] = useState(clients.length);
  const [isTransition, setIsTransition] = useState(true);

  // Single item width as percentage of track
  const itemWidthPercent = 100 / clonedClients.length;

  // Translate amount
  const translateX = currentIndex * itemWidthPercent;

  // Move to specific index
  const moveTo = useCallback((index, withTransition = true) => {
    setIsTransition(withTransition);
    setCurrentIndex(index);
  }, []);

  // Handle Next - shift 1 image
  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Handle Prev - shift 1 image
  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // On Transition End - silently reset to middle clone
  const handleTransitionEnd = useCallback(() => {
    isTransitioningRef.current = false;

    // Reached end clone set → jump to original
    if (currentIndex >= clients.length * 2) {
      moveTo(clients.length, false);
    }

    // Reached start clone set → jump to original end
    if (currentIndex <= 0) {
      moveTo(clients.length * 2 - 1, false);
    }
  }, [currentIndex, moveTo]);

  // Re-enable transition after silent jump
  useEffect(() => {
    if (!isTransition) {
      const timer = setTimeout(() => setIsTransition(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransition]);

  // Auto Play
  const startAutoPlay = useCallback(() => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_SPEED);
  }, [handleNext]);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(autoPlayRef.current);
  }, [startAutoPlay]);

  // Pause on Hover
  const handleMouseEnter = () => clearInterval(autoPlayRef.current);
  const handleMouseLeave = () => startAutoPlay();

  // Active dot index
  const activeDotIndex =
    (currentIndex - clients.length + clients.length * 10) % clients.length;

  return (
    <div className="section sm-padding" style={{ backgroundColor: "#e5e5e5" }}>
      <div className="container mx-auto px-20 flex">
        <div className="w-full px-16">
          <div className="col-md-1">
            <div className="">
              <div className="wpb_wrapper"></div>
            </div>
          </div>
          {/* Top Section - Title & Arrows */}
          <div className="flex justify-between">
            {/* Title */}
            <p
              style={{
                fontSize: "28px",
                lineHeight: "40px",
                borderBottom: "1px #DCDCDC solid !important",
                textTransform: "uppercase",
                fontWeight: 700,
                animationDelay: "200ms",
              }}
              className="block-head recent_project_heading fx animated fadeInUp w-full"
              data-animate="fadeInUp"
              data-animation-delay="200"
            >
              Our{" "}
              <span style={{ color: "#000000", fontWeight: 400 }}>Clients</span>
            </p>

            {/* Arrow Buttons - Top Right */}
          </div>
          <div
            className="flex gap-2"
            style={{ position: "absolute", right: "240px", top: "50px" }}
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-9 h-9 flex items-center justify-center
              bg-gray-500 hover:bg-[#e7512f] text-white
              rounded-md transition-all duration-200"
            >
              <FaAngleLeft size={16} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-9 h-9 flex items-center justify-center
              bg-gray-500 hover:bg-[#e7512f] text-white
              rounded-md transition-all duration-200"
            >
              <FaAngleRight size={16} />
            </button>
          </div>
          {/* Carousel Container */}
          <div
            className="w-full overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Sliding Track */}
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                // Total track width based on all cloned items
                width: `${(clonedClients.length / ITEMS_TO_SHOW) * 100}%`,
                transform: `translateX(-${translateX}%)`,
                transition: isTransition
                  ? `transform ${TRANSITION_SPEED}ms ease-in-out`
                  : "none",
              }}
            >
              {clonedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  // Each item takes equal width of track
                  style={{ width: `${100 / clonedClients.length}%` }}
                  className="px-2 flex-shrink-0"
                >
                  <Link
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-3 hover:shadow-lg
                  transition-shadow duration-200 group"
                  >
                    <div className="relative w-full h-[98px]">
                      <Image
                        src={client.image}
                        alt={client.alt}
                        fill
                        className="object-contain transition-transform
                      duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1">
            <div className="">
              <div className="wpb_wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
