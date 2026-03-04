"use client";

import LiquidStats from "@/src/components/ui/TextAnimation";
import { motion } from "framer-motion";

export default function Statistics() {
  const stats = [
    { label: "Saving Costing", value: "75%" },
    { label: "Increased Output", value: "81%" },
    { label: "Return on Investment", value: "87%" },
    { label: "Client Retention", value: "92%" },
  ];

  return (
    // <div className="bg-[#151619] ">
    //   <div className="container mx-auto px-6 lg:px-20">
    //     <section className="w-full py-16">
    //       <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    //         {stats.map((stat) => (
    //           <div
    //             key={stat.label}
    //             className="relative group rounded-xl p-6 flex flex-col justify-between hover:bg-gray-800/50 transition-colors"
    //           >
    //             {/* Number with dotted effect */}
    //             <div className="text-4xl lg:text-7xl font-extrabold text-stone-500 bg-black mb-2 tracking-widest leading-none dotted-text hover:bg-[#E7512F] hover:text-[#E7512F]">
    //               {stat.value}
    //             </div>

    //             {/* Label with wave animation on hover */}
    //             <motion.div
    //               className="uppercase text-sm lg:text-md text-gray-300 font-semibold flex flex-wrap"
    //               whileHover={{
    //                 y: [0, -4, 0],
    //                 transition: { repeat: Infinity, duration: 0.6 },
    //               }}
    //             >
    //               {stat.label}
    //             </motion.div>
    //           </div>
    //         ))}
    //       </div>
    //     </section>
    //   </div>
    // </div>

    <section
      className="bg-gray-defi-shadow text-gray-off-white"
      style={{ width: "full" }}
    >
      <div className="flex flex-col gap-2xl container py-block lg:flex-row lg:py-0">
        <LiquidStats statsData={stats} />
        {/* <div
          className="stat flex flex-col lg:flex-1 lg:py-block"
          style={{
            "--stat-width": "274px",
          }}
        >
          <div>
            <canvas className="hidden" height="0" width="0"></canvas>
            <canvas height="0" width="0"></canvas>
          </div>
          <div className="font-blender text-xl uppercase transition-all duration-1000 lg:text-sm text-gray-off-white">
            Daily trading volume
          </div>
        </div> */}
        {/* <div
          className="stat flex flex-col lg:flex-1 lg:py-block"
          style={{
            "--stat-width": "172px",
          }}
        >
          <div>
            <canvas className="hidden" height="0" width="0"></canvas>
            <canvas height="0" width="0"></canvas>
          </div>
          <div className="font-blender text-xl uppercase transition-all duration-1000 lg:text-sm text-gray-off-white">
            Trading venues covered
          </div>
        </div>
        <div
          className="stat flex flex-col lg:flex-1 lg:py-block"
          style={{
            "--stat-width": "178px",
          }}
        >
          <div>
            <canvas className="hidden" height="0" width="0"></canvas>
            <canvas height="0" width="0"></canvas>
          </div>
          <div className="font-blender text-xl uppercase transition-all duration-1000 lg:text-sm text-gray-off-white">
            Number of counterparties
          </div>
        </div>
        <div
          className="stat flex flex-col lg:flex-1 lg:py-block"
          style={{
            "--stat-width": "216px",
          }}
        >
          <div>
            <canvas className="hidden" height="0" width="0"></canvas>
            <canvas height="0" width="0"></canvas>
          </div>
          <div className="font-blender text-xl uppercase transition-all duration-1000 lg:text-sm text-gray-off-white">
            Token liquidity partners
          </div>
        </div>
        <div
          className="stat flex flex-col lg:flex-1 lg:py-block"
          style={{
            "--stat-width": "192px",
          }}
        >
          <div>
            <canvas className="hidden" height="0" width="0"></canvas>
            <canvas height="0" width="0"></canvas>
          </div>
          <div className="font-blender text-xl uppercase transition-all duration-1000 lg:text-sm text-gray-off-white">
            Venture investments
          </div>
        </div> */}
      </div>
    </section>
  );
}
