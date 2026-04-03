import React, { useRef } from "react";

export default function Capabilities({
  items,
  bgColor = "bg-gray-night-green",
  textColor = "text-gray-off-white",
  hoverColor = "bg-gray-defi-shadow",
  borderColor = "border-gray-defi-shadow",
}) {
  return (
    // <>
    //   <div className="bg-[#151619] ">
    //     <div className="container mx-auto px-6 lg:px-20">
    //       <section className="w-full bg-[#151619] text-gray-off-white group hover:bg-gray-900 transition-colors duration-500 border-b border-gray-700/20">
    //         <div className="mx-auto w-full sm:px-6 py-6 lg:py-10">
    //           <a href="otc" className="block w-full">
    //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-16 transform transition-transform duration-500 group-hover:-translate-y-2">
    //               {/* Video */}
    //               <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-center">
    //                 <div className="relative overflow-hidden rounded-xl w-full h-48 sm:w-40 sm:h-24 lg:w-[18rem] lg:h-[10rem]">
    //                   <video
    //                     playsInline
    //                     preload="metadata"
    //                     loop
    //                     muted
    //                     autoPlay
    //                     className="w-full h-full object-cover scale-100 transition-transform duration-700 group-hover:scale-110"
    //                   >
    //                     <source src="/media/Accordion-OTC.mp4#t=2" />
    //                   </video>
    //                 </div>

    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 40 40"
    //                   className="w-8 sm:w-8 lg:w-10 text-gray-400 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#E7512F] ml-2 sm:ml-4"
    //                   fill="currentColor"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </div>

    //               {/* Text */}
    //               <div className="order-2 sm:order-1 w-full sm:max-w-xl flex flex-col gap-2 text-left">
    //                 <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-200 hover:text-[#E7512F]">
    //                   Savings
    //                 </h3>
    //                 <p
    //                   className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-400
    //         opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2
    //         transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
    //                 >
    //                   Trade spot or derivatives across the widest range of
    //                   digital assets, with an OTC desk that sits at the source
    //                   of liquidity.
    //                 </p>
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //       </section>
    //     </div>
    //   </div>

    //   <div className="bg-[#151619] ">
    //     <div className="container mx-auto px-6 lg:px-20">
    //       <section className="w-full bg-[#151619] text-gray-off-white group hover:bg-gray-900 transition-colors duration-500 border-b border-gray-700/20">
    //         <div className=" mx-auto w-full sm:px-6  py-6 lg:py-10">
    //           <a href="otc" className="block w-full">
    //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-16 transform transition-transform duration-500 group-hover:-translate-y-2">
    //               {/* Video */}
    //               <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-center">
    //                 <div className="relative overflow-hidden rounded-xl w-full h-48 sm:w-40 sm:h-24 lg:w-[18rem] lg:h-[10rem]">
    //                   <video
    //                     playsInline
    //                     preload="metadata"
    //                     loop
    //                     muted
    //                     autoPlay
    //                     className="w-full h-full object-cover scale-100 transition-transform duration-700 group-hover:scale-110"
    //                   >
    //                     <source src="/media/Accordion-Ventures.mp4#t=2" />
    //                   </video>
    //                 </div>

    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 40 40"
    //                   className="w-8 sm:w-8 lg:w-10 text-gray-400 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#E7512F] ml-2 sm:ml-4"
    //                   fill="currentColor"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </div>

    //               {/* Text */}
    //               <div className="order-2 sm:order-1 w-full sm:max-w-xl flex flex-col gap-2 text-left">
    //                 <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-200 hover:text-[#E7512F]">
    //                   Solutions
    //                 </h3>
    //                 <p
    //                   className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-400
    //         opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2
    //         transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
    //                 >
    //                   Trade spot or derivatives across the widest range of
    //                   digital assets, with an OTC desk that sits at the source
    //                   of liquidity.
    //                 </p>
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //       </section>
    //     </div>
    //   </div>

    //   <div className="bg-[#151619] ">
    //     <div className="container mx-auto px-6 lg:px-20">
    //       <section className="w-full text-gray-off-white group hover:bg-gray-900 transition-colors duration-500 border-b border-gray-700/20">
    //         <div className="mx-auto w-full sm:px-6 py-6 lg:py-10">
    //           <a href="otc" className="block w-full">
    //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-16 transform transition-transform duration-500 group-hover:-translate-y-2">
    //               {/* Video */}
    //               <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-center">
    //                 <div className="relative overflow-hidden rounded-xl w-full h-48 sm:w-40 sm:h-24 lg:w-[18rem] lg:h-[10rem]">
    //                   <video
    //                     playsInline
    //                     preload="metadata"
    //                     loop
    //                     muted
    //                     autoPlay
    //                     className="w-full h-full object-cover scale-100 transition-transform duration-700 group-hover:scale-110"
    //                   >
    //                     <source src="/media/Accordion-Governance-DeFi.mp4#t=2" />
    //                   </video>
    //                 </div>

    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 40 40"
    //                   className="w-8 sm:w-8 lg:w-10 text-gray-400 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#E7512F] ml-2 sm:ml-4"
    //                   fill="currentColor"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </div>

    //               {/* Text */}
    //               <div className="order-2 sm:order-1 w-full sm:max-w-xl flex flex-col gap-2 text-left">
    //                 <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-200 hover:text-[#E7512F]">
    //                   Implementation
    //                 </h3>
    //                 <p
    //                   className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-400
    //         opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2
    //         transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
    //                 >
    //                   Trade spot or derivatives across the widest range of
    //                   digital assets, with an OTC desk that sits at the source
    //                   of liquidity.
    //                 </p>
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    //   {/* <section className="w-full bg-[#151619] text-gray-off-white group hover:bg-gray-900 transition-colors duration-500 border-b border-gray-700/20"> */}
    // </>

    <section className={`hidden flex-col lg:flex ${bgColor} ${textColor}`}>
      {items?.map((item, index) => {
        const videoRef = useRef(null);

        const handleMouseEnter = () => {
          videoRef.current?.play();
        };

        const handleMouseLeave = () => {
          videoRef.current?.pause();
          videoRef.current.currentTime = 0; // reset
        };

        return (
          <React.Fragment key={index}>
            <a
              href={item.href}
              style={{ position: "relative" }}
              className={`group/motion-accordion transition-all duration-500 hover:${hoverColor}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="sr-only">{item.sr}</span>

              <div className="relative my-xl flex gap-2xl overflow-hidden transition-all duration-500 group-hover/motion-accordion:my-4xl container">
                {/* TEXT */}
                <div className="relative top-[3.3rem] flex flex-1 flex-col justify-between transition-all delay-500 group-hover/motion-accordion:top-0">
                  <div className="text-3xl transition-all delay-500 group-hover/motion-accordion:text-green-dark">
                    {item.title}
                  </div>

                  <div className="text-xl opacity-0 transition-all delay-500 group-hover/motion-accordion:opacity-100">
                    {item.description}
                  </div>
                </div>

                {/* VIDEO */}
                <div className="relative overflow-hidden bevel">
                  <div className="absolute h-full w-full animate-pulse bevel bg-gray-defi-charcoal"></div>

                  <video
                    ref={videoRef}
                    playsInline
                    preload="metadata"
                    loop
                    muted
                    className="aspect-video w-[17rem] origin-center scale-[2] object-cover bevel"
                    style={{ transform: item.rotate }}
                  >
                    <source src={item.video} />
                  </video>
                </div>

                {/* ARROW (UNCHANGED) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] duration-500"
                  style={{
                    "--arrow-offset": "1rem",
                    width: "2.5rem",
                  }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>

            {/* Divider */}
            {index !== items.length - 1 && (
              <hr className={`hidden lg:block ${borderColor}`} />
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
}
