import { useRef } from "react";

export default function ServiceLatestInsight() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "next" ? width : -width,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      title:
        "SIDAGO launches 24/7 crude oil CFD trading to meet demand for weekend liquidity",
      category: "Announcements",
      date: "24 Mar 2026",
      img: "images/image_1.png",
      href: "#",
    },
    {
      title: "Digital asset OTC market 2025",
      category: "Reports",
      date: "13 Jan 2026",
      img: "images/image_2.png",
      href: "#",
    },
    {
      title: "Introducing NODE Insights",
      category: "Announcements",
      date: "17 Sept 2025",
      img: "images/image_7.png",
      href: "#",
    },
    {
      title: "SIDAGO OTC Market Review 1H25",
      category: "Reports",
      date: "14 Jul 2025",
      img: "images/image_6.png",
      href: "#",
    },
    {
      title: "New NODE is reshaping how counterparties navigate crypto markets",
      category: "Announcements",
      date: "3 Apr 2025",
      img: "images/image_3.png",
      href: "#",
    },
    {
      title:
        "Bloomberg Law: VC Investors Find Complicated Ways to Monetize Locked-Up Crypto",
      category: "Media",
      date: "11 Mar 2025",
      img: "images/Media-Bloomberg-Law.svg",
      href: "#",
    },
    {
      title: "GMUSA: Trade the ‘Made in USA’ narrative with SIDAGO",
      category: "Announcements",
      date: "27 Jan 2025",
      img: "images/image_4.png",
      href: "#",
    },
    {
      title: "SIDAGO OTC: 2024 in review & 2025 outlook",
      category: "Reports",
      date: "17 Jan 2025",
      img: "images/image_8.png",
      href: "#",
    },
    {
      title:
        "Comparing LSTs, native tokens & fiat as collateral for call options",
      category: "Case Studies",
      date: "10 Oct 2024",
      img: "images/image.png",
      href: "#",
    },
    {
      title:
        "SIDAGO becomes a Eurex member, expanding its derivatives offering",
      category: "Announcements",
      date: "3 Oct 2024",
      img: "images/image_5.png",
      href: "#",
    },
  ];

  return (
    <section className="bg-gray-tradfi-horizon">
      <div className="container py-block">
        {/* Header */}
        <div className="mb-3xl flex flex-col gap-xl">
          <h2 className="font-blender text-xl uppercase text-black">
            Latest insights
          </h2>
          <hr className="border-gray-tradfi-steel" />
        </div>

        {/* Mobile (ALL cards) */}
        <div className="grid grid-cols-1 gap-xl sm:grid-cols-2 lg:hidden">
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="flex flex-col bevel bg-gray-tradfi-dust h-full"
            >
              <img
                alt={card.title}
                className="bevel w-full aspect-[1.66] object-cover"
                src={card.img}
              />

              <div className="p-xl flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-xs">
                  <span className="font-blender uppercase text-xs">
                    {card.category}
                  </span>
                  <span className="text-lg line-clamp-3 text-black">
                    {card.title}
                  </span>
                </div>
                <span className="font-blender uppercase text-xs text-black">
                  {card.date}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:block">
          <div className="flex justify-end gap-md mb-xl">
            <button
              onClick={() => scroll("prev")}
              className="bevel p-[0.625rem] bg-green-tradfi"
            >
              ←
            </button>
            <button
              onClick={() => scroll("next")}
              className="bevel p-[0.625rem] bg-green-tradfi"
            >
              →
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-xl scrollbar-none scroll-smooth"
          >
            {cards.map((card, i) => (
              <div key={i} className="w-[calc(100%/4+1rem)] shrink-0">
                <a
                  href={card.href}
                  className="flex flex-col bevel bg-gray-tradfi-dust h-full"
                >
                  <img
                    alt={card.title}
                    className="bevel w-full aspect-[1.66] object-cover"
                    src={card.img}
                  />

                  <div className="p-xl flex flex-col justify-between flex-1">
                    <div className="flex flex-col gap-xs">
                      <span className="font-blender uppercase text-xs text-black">
                        {card.category}
                      </span>
                      <span className="text-lg line-clamp-3 text-black">
                        {card.title}
                      </span>
                    </div>
                    <span className="font-blender uppercase text-xs text-black">
                      {card.date}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
